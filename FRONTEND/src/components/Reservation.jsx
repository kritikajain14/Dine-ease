import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  // const handleReservation = async (e) => {
  //   e.preventDefault();
  //    if (!firstName || !lastName || !email || !phone || !date || !time) {
  //   return toast.error("Please fill in all fields");
  // }
  //   try {
  //     const { data } = await axios.post(
  //       "http://localhost:3000/api/v1/reservation/send",
  //       { firstName, lastName, email, phone, date, time },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         withCredentials: true,
  //       }
  //     );

  const handleReservation = async (e) => {
  e.preventDefault();

  if (!firstName || !lastName || !email || !phone || !date || !time) {
    return toast.error("Please fill in all fields");
  }

  try {
    // Send data to backend to create Stripe Checkout Session
    // const { data } = await axios.post(
    //   "http://localhost:3000/api/v1/reservation/pay",
    //   { firstName, lastName, email, phone, date, time },
    //   {
    //     headers: { "Content-Type": "application/json" },
    //     withCredentials: true,
    //   }
    // );

    await fetch(`${API_URL}/api/v1/reservation/checkout`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    firstName,
    lastName,
    email,
    date,
    time,
    phone,
    successUrl: `${window.location.origin}/success`
  })
});

    // Redirect to Stripe Checkout
    window.location.href = data.url;

  }
       // toast.success(data.message);
      // setFirstName("");
      // setLastName("");
      // setPhone("");
      // setEmail("");
      // setTime("");
      // setDate("");
      // navigate("/success");
    catch (error) {
    toast.error(
      error.response?.data?.message || error.message || "Something went wrong"
    );

    }
  };

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="/reservation.png" alt="res" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>MAKE A RESERVATION</h1>
            <p>For Further Questions, Please Call</p>
            <form onSubmit={handleReservation}>
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="date"
                  placeholder="Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <input
                  type="time"
                  placeholder="Time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="email_tag"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <button type="submit">
                RESERVE NOW & PAY
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;