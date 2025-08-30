import express from "express";
import { createCheckoutSession, saveAfterPayment } from "../controller/reservation.js";

const router = express.Router();

// Step 1: Create Stripe Checkout Session
router.post("/pay", createCheckoutSession);

// Step 2: Save reservation after successful payment
router.post("/save-after-payment", saveAfterPayment);

export default router;
