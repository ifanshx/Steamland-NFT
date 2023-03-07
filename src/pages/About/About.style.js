import styled from "styled-components";

export const SectionAbout = styled.div`
  display: flex;
  background-color: #ece2e2;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1200px;
  padding-top: 100px;
`;

export const Box2 = styled.div`
  position: relative;
  display: flex;
  width: 200px;
  height: 200px;
  background-color: aliceblue;
  margin: 2px 10px;
  flex-direction: column;
  align-items: center;
  padding: 5px 0px;
  :hover {
    border: 1px solid;
  }
`;

export const Images = styled.img`
  display: flex;
  width: 80%;
`;

export const Name = styled.div`
  padding: 5px 5px;
  text-align: center;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: medium;
  font: bold;
  color: black;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
