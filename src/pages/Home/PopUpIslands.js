import React from "react";
import istana from "../../assets/image/istana.png";
import styled from "styled-components";

const StyledPopup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(6px);
  z-index: 999;
`;

const Background = styled.div`
  position: fixed;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  position: relative;
  width: 600px;
  padding: 4rem;
  background-color: #f8f8f8;
  border-radius: 1rem;
  border: 2px solid var(--plain-shadow);
  font-size: 1.4rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  div {
    font-size: 20px;
    font-family: "Barriecito", cursive;
  }

  @media (max-width: 1172px) {
    width: 200px;
    padding: 2rem;
    div {
      font-size: 10px;
    }
  }
`;
const Istana = styled.img`
  width: 400px;
  box-sizing: border-box;
  display: flex;
  background-image: none;
  @media (max-width: 1172px) {
    width: 40vw;
  }
`;

export function PopUpIslands({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <StyledPopup>
      <Background onClick={onClose} />
      <Container onClick={onClose}>
        <Istana src={istana} />
        <div>THIS IS STEAM ISLAND</div>
      </Container>
    </StyledPopup>
  );
}
