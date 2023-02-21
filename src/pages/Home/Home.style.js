import styled from "styled-components";

export const SectionHome = styled.div`
  max-height: 100vh;
  height: 100vh;
  width: 100%;
  background-color: #ece7e2;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  @media screen and (max-width: 1172px) {
    background-color: #ece1e4;
  }
`;

export const Video = styled.video`
  max-width: 100%;
  max-height: 100vh;
  object-fit: cover;
`;

export const FixedBot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  position: fixed;
  bottom: 2%;
  right: 2%;
  height: 10%;
  background-color: #c03540;
  border-radius: 10px;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 8%), 0 2px 2px hsl(0deg 0% 0% / 8%),
    0 4px 4px hsl(0deg 0% 0% / 8%), 0 8px 8px hsl(0deg 0% 0% / 8%),
    0 16px 16px hsl(0deg 0% 0% / 8%);
`;

export const LeftFixed = styled.div``;

export const RightFixed = styled.div`
  flex: 0.5;
  justify-content: flex-end;
  align-items: center;
  display: flex;
`;

export const TextBot = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  p {
    font-weight: bold;
    &:first-child {
      opacity: 1;
      font-size: 1.2rem;
      color: white;
    }
  }
  span {
    opacity: 0.5;
  }
`;
