import React, { useEffect } from "react";
import {
  Bird,
  ContainerBird,
  Istana,
  Istana2,
  SectionHome,
  Ship1,
  Ship2,
  Ship3,
} from "./Home.style";
import bird from "../../assets/image/bird.gif";
import Ships1 from "../../assets/image/ship1.png";
import Ships2 from "../../assets/image/ship2.png";
import Ships3 from "../../assets/image/ship3.png";
import istana from "../../assets/image/istana.png";
import istana2 from "../../assets/image/islands2.png";

const Home = () => {
  return (
    <SectionHome>
      <Istana src={istana} />
      <Istana2 src={istana2} />
      <Bird src={bird} />
      <Ship1 src={Ships1} />
      <Ship2 src={Ships2} />
      <Ship3 src={Ships3} />
    </SectionHome>
  );
};

export default Home;
