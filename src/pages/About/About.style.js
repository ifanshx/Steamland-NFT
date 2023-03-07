import styled from "styled-components";

export const SectionAbout = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  background-color: #ece2e2;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 5px 0px;
  padding-top: 80px;
`;

export const TokenCard = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin: 1rem;

  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  }
`;

export const Images = styled.img`
  width: 85%;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`;

export const TokenInfo = styled.div`
  padding: 5px 5px;
  text-align: center;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  font-weight: bold;
  color: #63b3ed;
`;

export const TokenName = styled.a`
  color: #63b3ed;
`;

export const TokenAddress = styled.a`
  display: flex;
  color: #ed64a6;
`;
