import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Paybutton = ({ cartItems }) => {
  const user = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);

  const handleCheckout = () => {
    setLoading(true);
    axios
      .post("/api/payments/create-checkout-session", {
        cartItems: cartItems,
        userId: user._id,
      })
      .then((res) => {
        if (res.data?.url) {
          window.location.href = res.data.url;
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <button
        disabled={loading}
        onClick={() => {
          handleCheckout();
        }}
      >
        {loading ? "Loading.." : "Check Out"}
      </button>
    </>
  );
};

export default Paybutton;
