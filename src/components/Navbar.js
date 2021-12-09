import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  height: 10rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 5%;
`;

function Navbar() {
  return (
    <Nav>
      <div className="logo">
        <h2>NASA Picture of the Day</h2>
      </div>
    </Nav>
  );
}

export default Navbar;
