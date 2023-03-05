import styled from "styled-components";

export const SectionRoadmap = styled.div`
  max-height: 100vh;
  height: 100vh;
  width: 100%;
  background-color: #e2ebec;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
`;

export const Box = styled.div`
  height: 206px;
  width: 280px;
  position: absolute;
  overflow: hidden;
  cursor: pointer;
  border-radius: 5px;
  bottom: 6%;
  right: 6%;
  padding: 1px 1px;
  background-color: #c9a27522;
  transition: all 0.4s ease 0s;
  transform: translate3d(10%, 0, 0) scale(1.3);
  &:hover {
    border: 2px solid;
    border-radius: 30px 0px;
    padding: 5px 5px;
  }
`;

export const Hero1 = styled.img`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  margin: 75px 28%;
  &:hover {
    transform: translate3d(10%, 5%, 0) scale(1.1);
  }
`;
