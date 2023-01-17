import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../features/authSlice";
import { StyledForm } from "./StyledForm";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = useSelector((state) => state.auth);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (auth._id) {
      navigate("/cart");
    }
  }, [auth._id, navigate]);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(user));
  };
  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button>
          {auth.registerUser === "pending" ? "Submitting" : "Register"}
        </button>
        {auth.registerUser === "rejected" ? <p>{auth.registerError}</p> : null}
      </StyledForm>
    </div>
  );
};

export default Register;
