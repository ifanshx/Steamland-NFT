import React, { useEffect, useState } from "react";
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
  const [text, setText] = useState("Disconnect");
  const { address, isConnected } = useAccount();
  const [name, setName] = useState("");
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();
  useEffect(() => {
    setName(`${address}`);
  }, [address]);

  return (
    <SectionNavbar>
      <LeftHeader>
        <LogoText>
          <span>STEAMLAND</span>
        </LogoText>
      </LeftHeader>
      <RightHeader>
        <Menu isOpen={isOpen}>
          <MenuLink to="/">Home</MenuLink>
          <MenuLink to="/Collection">Collection</MenuLink>
          <MenuLink to="/Team">Team</MenuLink>
          <MenuLink to="/Roadmap">Roadmap</MenuLink>
          {isConnected ? (
            <Connect
              onClick={() => disconnect()}
              onMouseEnter={() => setText("Disconnect")}
              onMouseLeave={() =>
                setText(
                  `${name?.substring(0, 3)}...${name?.substring(
                    name?.length - 4
                  )}`
                )
              }
            >
              {text}
            </Connect>
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
