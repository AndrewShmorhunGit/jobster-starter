import React from "react";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../store";

const SmallSidebar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div className="sidebar-container show-sidebar">
        <div className="content">
          <button className="close-btn" onClick={() => console.log("toggle")}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <div className="nav-links">Some text</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
