import React from "react";
import styled, { keyframes } from "styled-components";

const kf = keyframes`
100% {
  opacity: 1;
  transform: scale(1) rotateZ(0);
}
`;

const Nav = styled.nav`
  height: 10rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 5%;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

const Logo = styled.div`
  width: 30rem;
  opacity: 0;
  transform: scale(2) rotateZ(180deg);
  animation: ${kf} 0.5s ease-in-out forwards;

  h2 {
    font-size: ${({ theme }) => theme.h2};
    color: ${({ theme }) => theme.primaryColor};
  }
`;

function Navbar() {
  return (
    <Nav>
      <Logo>
        <h2>NASA Picture of the Day</h2>
      </Logo>
    </Nav>
  );
}

export default Navbar;
