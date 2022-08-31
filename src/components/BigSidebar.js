import React from "react";
import Wrapper from "../assets/wrappers/BigSidebar";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import { FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";

const BigSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <div className="nav-links">
            <NavLinks />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
