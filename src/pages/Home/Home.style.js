import styled, { keyframes } from "styled-components";

export const SectionHome = styled.div`
  max-height: 100vh;
  height: 100vh;
  width: 100%;
  background-color: rgb(255, 217, 177);
  background-repeat: repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  @media screen and (max-width: 1172px) {
    background-color: rgb(255, 217, 162);
  }
`;

export const Map = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 480px;
  height: 480px;
  background: url("/assets/map.png") no-repeat center center / cover;
`;

export const Cover = styled.img`
  max-width: 100%;
  height: 101vh;
  box-sizing: border-box;
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

const Fly = keyframes`
0% {

		transform: translate(110vh,-200%) rotateZ(1deg); opacity: 1;
	}


	100% {
		transform: translate(-100%,110vh) rotateZ(0deg);opacity: 1;
	}

`;

export const Bird = styled.img`
  width: 100px;
  animation: ${Fly} 50s linear infinite;
  top: 120px;
  left: 0;
  position: fixed;
  z-index: 998;
  pointer-events: none;
`;

const ShipsFly1 = keyframes`

 0%{left: 55%; transform: translate(20px) }
  50%{ transform: translate(10px) }
100%{left: -80%; transform: translate(2px)}

`;

export const Ship1 = styled.img`
  width: 100%;
  animation: ${ShipsFly1} 80s linear infinite;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 996;
  pointer-events: none;
  @media (max-width: 1172px) {
    width: 110%;
    top: 30px;
  }
`;

const ShipsFly2 = keyframes`
0% {
    transform: translateX(-550px);
}

50% {
    transform: translateY(100px);
}
100% {
    transform: translateX(1000px);
}


`;

export const Ship2 = styled.img`
  width: 100%;
  animation: ${ShipsFly2} 50s linear infinite;
  top: 140px;
  left: 0;
  position: fixed;
  z-index: 998;
  pointer-events: none;
`;

const ShipsFly3 = keyframes`
0% {

		transform: translate(-50%,90vh) ; opacity: 1;
	}


	100% {
		transform: translate(125vh,0%) ;opacity: 50;
	}

`;

export const Ship3 = styled.img`
  width: 100%;
  animation: ${ShipsFly3} 60s linear infinite;
  top: 120px;
  left: 0;
  position: fixed;
  z-index: 996;
  pointer-events: none;
`;

const IstanaFly = keyframes`
  to{ transform:translateY(20px); }


`;
export const Istana = styled.img`
  width: 1100px;
  box-sizing: border-box;
  display: flex;
  background-image: none;
  &:hover {
    width: 1200px;
  }
`;

export const ContainerIstana = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-image: none;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  animation: ${IstanaFly} 4s infinite alternate;
  z-index: 998;
  @media (max-width: 1172px) {
    display: flex;
    width: 400px;
    justify-content: center;
  }
`;

const IstanaFly2 = keyframes`
  to{ transform:translateY(20px); }


`;
export const Istana2 = styled.img`
  width: 95%;
  transition: all 0.25s ease-in-out;
  animation: ${IstanaFly2} 5s infinite alternate-reverse;
  position: fixed;
  z-index: 997;
  pointer-events: none;
  @media (max-width: 1172px) {
    display: flex;
    width: 120%;
    justify-content: center;
  }
`;

const CloudsFrontFly = keyframes`
  to{ transform:translateY(5px); }
`;
export const CloudsFront = styled.img`
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

const CloudsFly = keyframes`
  to{ transform:translateY(20px); }
`;
export const Clouds2 = styled.img`
  width: 100%;
  animation: ${CloudsFly} 3s infinite alternate;
  position: fixed;
  z-index: 996;
  pointer-events: none;
`;
