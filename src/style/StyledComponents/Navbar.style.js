import { Link } from "react-router-dom";
import styled from "styled-components";

export const SectionNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 13vh;
  height: auto;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: transparent;
  z-index: 20;
  @media (max-width: 1172px) {
    justify-content: space-between;
    padding-inline: 2.5rem;
  }
`;

export const Logo = styled.img`
  max-width: 100%;
  height: 1.8rem;
  object-fit: contain;
  background-color: #c03540;
  transition: all 0.25s ease-in-out;
  cursor: pointer;
  padding: 0.5rem;
  position: relative;
  z-index: 5;
  &:hover {
    background-color: rgba(225, 29, 72, 1);
  }
`;
export const LogoText = styled.a`
  padding: 1rem 0;
  color: #1a1a1a;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  font-family: "Barriecito", cursive;
  color: rgba(225, 29, 72, 1);
  span {
    font-weight: 300;
    font-size: 1.3rem;
    color: black;
    &:hover {
      color: rgba(225, 29, 72, 1);
    }
  }
  &:hover {
    color: black;
  }
`;

export const LeftHeader = styled.div`
  flex: 0.1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 4rem;
  @media (max-width: 1253px) {
    padding-left: 1rem;
  }
  @media (max-width: 1172px) {
    flex: none;
    padding: 0;
    padding: 0rem;
  }
`;

export const RightHeader = styled.div`
  padding-right: 4rem;
  flex: 0.8;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 1253px) {
    padding-right: 1rem;
  }
  @media (max-width: 1172px) {
    padding: 0rem;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  @media (max-width: 1172px) {
    position: absolute;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.7);
    top: 0;
    justify-content: flex-start;
    padding-top: 13vh;
    padding-inline: 1.5rem;
    align-items: flex-start;
    z-index: -1;
    transition: all 0.35s ease-in-out;
    left: 0;
    backdrop-filter: blur(16px);
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
  }
`;
export const Connect = styled.button`
  color: black;
  font-size: 0.8rem;
  cursor: pointer;
  border: none;
  background-color: rgba(255, 255, 255, 0.2);
  transition: all 0.5s ease-in-out;
  border-radius: 5px;
  padding: 5px 15px;
  margin-left: 15px;
  &:hover {
    background-color: white;
    color: rgba(225, 29, 72, 1);
  }

  @media (max-width: 1172px) {
    font-size: 1rem;
    width: 4;
    font-weight: bolder;
    padding: 0.1rem 0;
    font-family: "Barriecito", cursive;
    cursor: pointer;
    background-color: transparent;
    margin-top: 2.5%;
    overflow: hidden;
    flex-direction: column;
    &:hover {
      color: rgba(225, 29, 72, 1);
    }
  }
  &:hover {
    color: rgba(225, 29, 72, 1);
  }
  @media (max-width: 728px) {
    padding: 0.3rem 0;
    margin-top: 2%;
  }
`;

export const MenuLink = styled(Link)`
  color: black;
  font-size: 0.8rem;
  text-decoration: none;
  background-color: rgba(255, 255, 255, 0.2);
  transition: all 0.5s ease-in-out;
  border-radius: 5px;
  padding: 5px 15px;
  margin-left: 15px;
  &:hover {
    background-color: white;
    color: rgba(225, 29, 72, 1);
  }

  @media (max-width: 1172px) {
    font-size: 1rem;
    width: 4;
    font-weight: bolder;
    padding: 0.1rem 0;
    font-family: "Barriecito", cursive;
    cursor: pointer;
    background-color: transparent;
    margin-top: 2.5%;
    overflow: hidden;
    flex-direction: column;
    &:hover {
      color: rgba(225, 29, 72, 1);
    }
  }
  &:hover {
    color: rgba(225, 29, 72, 1);
  }
  @media (max-width: 728px) {
    padding: 0.3rem 0;
    margin-top: 2%;
  }
`;

export const Hamburger = styled.button`
  display: none;
  outline: none;
  flex-direction: column;
  border: 0px;
  padding: 0px;
  background: transparent;
  cursor: pointer;
  position: relative;
  font-family: "Barriecito", cursive;
  z-index: 5;
  &:hover {
    color: rgba(225, 29, 72, 1);
  }
  span {
    height: 2px;
    width: 25px;
    background: #1a1a1a;
    margin-bottom: 4px;
    border-radius: 5px;
    &:hover {
      color: rgba(225, 29, 72, 1);
    }
  }
  @media (max-width: 1172px) {
    display: flex;
    padding: 0 5rem;
  }
`;
