import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";
import dotenv from "dotenv";
dotenv.config({ path: './config/config.env' });

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Step 1: Create Stripe Checkout Session
export const createCheckoutSession = async (req, res, next) => {
  const { firstName, lastName, email, date, time, phone } = req.body;

  if (!firstName || !lastName || !email || !date || !time || !phone) {
    return next(new ErrorHandler("Please Fill Full Reservation Form!", 400));
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: `Table Reservation - ${firstName} ${lastName}`,
            },
            unit_amount: 50000, // ₹500 in paise
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      // cancel_url: `${process.env.FRONTEND_URL}/cancel`,
      metadata: { firstName, lastName, email, date, time, phone },
    });

    res.json({ url: session.url });
  } catch (error) {
    next(error);
  }
};

// Step 2: Save Reservation After Payment Success
export const saveAfterPayment = async (req, res, next) => {
  try {
     console.log("✅ saveAfterPayment called with body:", req.body);
    const { sessionId } = req.body;
    if (!sessionId) {
       console.log("❌ No sessionId received");
      return next(new ErrorHandler("Session ID missing!", 400));
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);
    console.log("💳 Stripe session retrieved:", session);

    if (session.payment_status === "paid") {
      console.log("💰 Payment is paid, saving to DB...");
      await Reservation.create({
        firstName: session.metadata.firstName,
        lastName: session.metadata.lastName,
        email: session.metadata.email,
        date: session.metadata.date,
        time: session.metadata.time,
        phone: session.metadata.phone,
        paymentStatus: "paid",
      });
      console.log("✅ Reservation saved in DB");

      res.json({ success: true, message: "Reservation confirmed & payment successful!" });
    } else {
      console.log("❌ Payment not completed:", session.payment_status);
      res.status(400).json({ error: "Payment not completed" });
    }
  } catch (error) {
    console.error("❌ Error in saveAfterPayment:", error);
    next(error);
  }
};

export default createCheckoutSession;
