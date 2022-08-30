import React from "react";
import { useState, useEffect } from "react";
import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { toast } from "react-toastify";

const InitialState = {
  name: "",
  password: "",
  email: "",
  isMember: false,
};

const Register = () => {
  const [values, setValues] = useState(InitialState);

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error("Please Fill Out All Fields");
      return;
    }
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Join"}</h3>
        <div className="form-row">
          {/* <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            className="form-input"
          /> */}
          {/* name field*/}
          {values.isMember || (
            <FormRow
              type="text"
              name="name"
              value={values.name}
              handleChange={handleChange}
            />
          )}
          {/* email field*/}
          <FormRow
            type="email"
            name="email"
            value={values.email}
            handleChange={handleChange}
          />
          {/* password field*/}
          <FormRow
            type="password"
            name="password"
            value={values.password}
            handleChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button" className="member-btn" onClick={toggleMember}>
            {values.isMember ? "Join" : "Register"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
