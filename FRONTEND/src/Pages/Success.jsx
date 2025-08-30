import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import toast from "react-hot-toast";

const Success = () => {
  const [countdown, setCountdown] = useState(10);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const saveReservation = async () => {
      const sessionId = searchParams.get("session_id");

      if (!sessionId) {
        toast.error("Missing session ID!");
        return;
      }

      try {
        const { data } = await axios.post(
          "http://localhost:3000/api/v1/reservation/save-after-payment",
          { sessionId },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );

        toast.success(data.message || "Reservation saved successfully!");
      } catch (error) {
        toast.error(
          error.response?.data?.message ||
            error.message ||
            "Failed to save reservation"
        );
      }
    };

    saveReservation();
  }, [searchParams]);

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount === 1) {
          clearInterval(timeoutId);
          navigate("/");
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(timeoutId);
  }, [navigate]);

  return (
    <section className="notFound">
      <div className="container">
        <img src="/sandwich.png" alt="success" />
        <h1>Redirecting to Home in {countdown} seconds...</h1>
        <Link to={"/"}>
          Back to Home <HiOutlineArrowNarrowRight />
        </Link>
      </div>
    </section>
  );
};

export default Success;
