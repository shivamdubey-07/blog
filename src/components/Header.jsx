import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import styled from "styled-components";

function Header() {
  return (
    <MainHeader>
      <NavLink to="/">
        <img
        className="logo"
          src="./images/IMG_5624.jpg"
          alt="logo here"
          width="100px"
          height="100px"
        ></img>
      </NavLink>

      <Nav/>
    </MainHeader>
  );
}

const MainHeader=styled.header`

padding: 0 4.8rem;
height: 10rem;
background-color: ${({ theme }) => theme.colors.bg};
display: flex;
justify-content: space-between;
align-items: center;

.logo {
  height: auto;
  max-width: 30%;
}
`;

export default Header;
