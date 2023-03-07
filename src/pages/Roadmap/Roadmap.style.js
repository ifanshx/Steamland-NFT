import styled, { keyframes } from "styled-components";

export const SectionRoadmap = styled.div`
  max-height: 100vh;
  height: 100vh;
  width: 100%;
  background-color: #fff7ed;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
`;

const CloudsFly = keyframes`
  to{ transform:translateY(20px); }
`;
export const Clouds3 = styled.img`
  width: 100%;
  animation: ${CloudsFly} 3s infinite alternate;
  position: fixed;
  pointer-events: none;
`;

const CloudsFrontFly = keyframes`
  to{ transform:translateY(5px); }
`;
export const CloudsFront3 = styled.img`
  width: 102%;
  height: 106%;
  animation: ${CloudsFrontFly} 4s infinite alternate;
  position: fixed;
  z-index: 998;
  pointer-events: none;
  @media (max-width: 1172px) {
    width: 390%;
    width: 392%;
    animation: ${CloudsFrontFly} 1s infinite alternate;
  }
`;

export const Roadmaps = styled.img`
  display: flex;
  position: fixed;
  bottom: 75%;
  width: 25%;
`;

export const Box1 = styled.div`
  height: 250px;
  width: 300px;
  position: absolute;
  overflow: hidden;
  cursor: pointer;
  border-radius: 1px;
  bottom: 45%;
  right: 70%;
  padding: 1px 1px;
  background-color: #4b6f70;
  transition: all 0.4s ease 0s;
  transform: translate3d(10%, 0, 0) scale(1.1);
  &:hover {
    z-index: 999;
    border: 2px solid;
    border-radius: 10px 0px 0px 10px;
    padding: 0px 20px;
  }
`;

export const Hero1 = styled.img`
  box-sizing: border-box;
  display: flex;
  width: 85%;
  margin: 1px 28%;
  &:hover {
    transform: translate3d(10%, 5%, 0) scale(1.1);
  }
`;

export const Box2 = styled.div`
  height: 250px;
  width: 300px;
  position: absolute;
  overflow: hidden;
  cursor: pointer;
  border-radius: 1px;
  bottom: 4%;
  right: 70%;
  padding: 1px 1px;
  background-color: #6d333f;
  transition: all 0.4s ease 0s;
  transform: translate3d(10%, 0, 0) scale(1.1);
  &:hover {
    z-index: 999;
    border: 2px solid;
    border-radius: 10px 0px 0px 10px;
    padding: 0px 20px;
  }
`;

export const Hero2 = styled.img`
  box-sizing: border-box;
  display: flex;
  width: 85%;
  margin: 1px 28%;
  &:hover {
    transform: translate3d(10%, 5%, 0) scale(1.1);
  }
`;
export const Box3 = styled.div`
  height: 400px;
  width: 300px;
  position: absolute;
  overflow: hidden;
  cursor: pointer;
  border-radius: 1px;
  bottom: 15%;
  right: 42%;
  padding: 1px 1px;
  background-color: #8d755c;
  transition: all 0.4s ease 0s;
  transform: translate3d(10%, 0, 0) scale(1.1);
  &:hover {
    z-index: 999;
    border: 2px solid;
    border-radius: 10px 10px 10px 10px;
    padding: 10px 0px 0px 10px;
  }
`;

export const Hero3 = styled.img`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  margin: 120px 1%;
  &:hover {
    transform: translate3d(10%, 5%, 0) scale(1.1);
  }
`;
export const Box4 = styled.div`
  height: 250px;
  width: 300px;
  position: absolute;
  overflow: hidden;
  cursor: pointer;
  border-radius: 1px;
  bottom: 4%;
  right: 14%;
  padding: 1px 1px;
  background-color: #ffaa67;
  transition: all 0.4s ease 0s;
  transform: translate3d(10%, 0, 0) scale(1.1);
  &:hover {
    z-index: 999;
    border: 2px solid;
    border-radius: 0px 10px 10px 0px;
    padding: 0px 20px;
  }
`;

export const Hero4 = styled.img`
  box-sizing: border-box;
  display: flex;
  width: 90%;
  margin: 1px 10%;
  &:hover {
    transform: translate3d(10%, 5%, 0) scale(1.1);
  }
`;

export const Box5 = styled.div`
  height: 250px;
  width: 300px;
  position: absolute;
  overflow: hidden;
  cursor: pointer;
  border-radius: 1px;
  bottom: 45%;
  right: 14%;
  padding: 1px 1px;
  background-color: #250;
  transition: all 0.4s ease 0s;
  transform: translate3d(10%, 0, 0) scale(1.1);
  &:hover {
    z-index: 999;
    border: 2px solid;
    border-radius: 0px 10px 10px 0px;
    padding: 0px 20px;
  }
`;

export const Hero5 = styled.img`
  box-sizing: border-box;
  display: flex;
  width: 85%;
  margin: 1px 28%;
  &:hover {
    transform: translate3d(10%, 5%, 0) scale(1.1);
  }
`;
