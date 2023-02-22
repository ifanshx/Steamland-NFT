import React, { useState } from "react";
import {
  Connect,
  Hamburger,
  LeftHeader,
  LogoText,
  Menu,
  MenuLink,
  RightHeader,
  SectionNavbar,
} from "../style/StyledComponents/Navbar.style";

import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();
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
          {isConnected ? (
            <Connect onClick={() => disconnect()}>Disconnect</Connect>
          ) : (
            <Connect onClick={() => connect()}>Connect</Connect>
          )}
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
