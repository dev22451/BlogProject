import { Button } from "antd";
import React from "react";
import { Logo } from "../../assets";
import "./navbar-style.css";

export const Navbar = () => {
  return (
    <>
      <section className="navbar-wrapper">
        <div className="navbar-container">
          <img className="logo" src={Logo} alt="craftly logo" />
          <div className="action-button-container">
            <Button className="login-button" shape="round">
              Log In
            </Button>
            <Button className="signup-button" shape="round">
              Sign Up
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
