import { Button } from "antd";
import React from "react";
import styled from "styled-components";
import { Logo } from "../../assets";

const NavbarWrapper = styled.section`
  display: flex;
  justify-content: center;
`;
const NavbarContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.img`
  width: 10%;
  height: auto;
`;

const ActionButtonContainer = styled.div``;
const LoginButton = styled(Button)`
  margin: 8px;
  padding: 0.3rem 1.5rem !important;
  font-weight: 500 !important;
  font-size: 0.8rem;
  border: 1px solid #9979fd !important;
  color: #9979fd !important;
`;
const SignupButton = styled(Button)`
  margin: 8px;
  padding: 0.3rem 1.5rem !important;
  font-weight: 500 !important;
  font-size: 0.8rem;
  background: linear-gradient(45deg, #8878f9, #9b72fa) !important;
  border: none !important;
  color: white !important;
`;
export const Navbar = () => {
  return (
    <>
      <NavbarWrapper className="navbar-wrapper">
        <NavbarContainer className="navbar-container">
          <LogoContainer className="logo" src={Logo} alt="craftly logo" />
          <ActionButtonContainer className="action-button-container">
            <LoginButton className="login-button" shape="round">
              Log In
            </LoginButton>
            <SignupButton className="signup-button" shape="round">
              Sign Up
            </SignupButton>
          </ActionButtonContainer>
        </NavbarContainer>
      </NavbarWrapper>
    </>
  );
};
