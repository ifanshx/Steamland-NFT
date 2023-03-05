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
  z-index: 999;
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
  z-index: 999;
  &:hover {
    background-color: rgba(225, 29, 72, 1);
  }
`;
export const LogoText = styled.a`
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  z-index: 999;
  padding: 2px 7px;
  background-color: rgba(255, 255, 255, 0.2);
  transition: all 0.25s ease-in-out;
  font-family: "Barriecito", cursive;
  color: rgba(225, 29, 72, 1);
  span {
    font-weight: 300;
    font-size: 1.3rem;
    z-index: 999;
    color: #1a1a1a;
    &:hover {
      color: rgba(225, 29, 72, 1);
    }
  }
  &:hover {
    z-index: 999;
    box-shadow: inset 0px 33px 21px 0 #ece1e5 inset 0 40px 15px 0px #99454f,
      inset 0 99px 5px 0px #14f195;
    color: #1a1a1a;
    border-radius: 20px 1px;
    padding: 5px 14px;
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
    justify-content: flex-start;
    padding-top: 13vh;
    padding-inline: 1.5rem;
    align-items: flex-start;
    z-index: 998;
    transition: all 0.35s ease-in-out;
    left: 0;
    top: 0;
    backdrop-filter: blur(2px);
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(0)" : "translateY(-100%)"};
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  }
`;
export const Connect = styled.button`
  color: #1a1a1a;
  font-size: 0.8rem;
  cursor: pointer;
  border: none;
  background-color: rgba(255, 255, 255, 0.2);
  transition: all 0.5s ease-in-out;
  border-radius: 5px;
  padding: 5px 15px;
  margin-left: 15px;
  &:hover {
    box-shadow: inset 0px 33px 21px 0 #ece1e5 inset 0 40px 15px 0px #99454f,
      inset 0 99px 5px 0px #14f195;
    background-color: white;
    border-radius: 10px 1px;
    padding: 7px 16px;
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
  color: #1a1a1a;

  font-size: 0.8rem;
  text-decoration: none;
  background-color: rgba(255, 255, 255, 0.2);
  transition: all 0.5s ease-in-out;
  border-radius: 5px;
  padding: 5px 15px;
  margin-left: 15px;

  &:hover {
    box-shadow: inset 0px 33px 21px 0 #ece1e5 inset 0 40px 15px 0px #99454f,
      inset 0 99px 5px 0px #14f195;
    background-color: white;
    border-radius: 10px 1px;
    padding: 7px 16px;
    color: bisque;
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
  z-index: 999;
  &:hover {
    color: rgba(225, 29, 72, 1);
  }
  span {
    height: 2px;
    width: 25px;
    background: #1a1a1a;
    margin-bottom: 4px;
    border-radius: 5px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
      transform: ${({ isOpen }) =>
        isOpen ? "translateX(-20px)" : "translateX(0)"};
    }
    :nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
  @media (max-width: 1172px) {
    display: flex;
    padding: 0 5rem;
  }
`;
