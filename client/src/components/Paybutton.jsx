import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Paybutton = ({ cartItems }) => {
  const user = useSelector((state) => state.auth);

  const handleCheckout = () => {
    axios
      .post("/api/payments/create-checkout-session", {
        cartItems: cartItems,
        userId: user._id,
      })
      .then((res) => {
        if (res.data?.url) {
          window.location.href = res.data.url;
        }
      });
  };

  return (
    <>
      <button
        onClick={() => {
          handleCheckout();
        }}
      >
        Check Out
      </button>
    </>
  );
};

export default Paybutton;
