import React, { useState } from "react";
import {
  Connect,
  Hamburger,
  LeftHeader,
  Logo,
  LogoText,
  Menu,
  MenuLink,
  RightHeader,
  SectionNavbar,
} from "../style/StyledComponents/Navbar.style";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <SectionNavbar>
      <LeftHeader>
        <LogoText>
          S<span>hinno</span>
        </LogoText>
      </LeftHeader>
      <RightHeader>
        <Menu isOpen={isOpen}>
          <MenuLink to="/">Home</MenuLink>
          <MenuLink to="/About">About</MenuLink>
          <MenuLink to="/Team">Team</MenuLink>
          <MenuLink to="/Roadmap">Roadmap</MenuLink>
          <Connect>Connect</Connect>
        </Menu>
      </RightHeader>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
    </SectionNavbar>
  );
};

export default Navbar;
