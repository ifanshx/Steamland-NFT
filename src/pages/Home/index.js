import React, { useEffect, useState } from "react";
import {
  Bird,
  Clouds2,
  CloudsFront,
  ContainerBird,
  ContainerIstana,
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
import cloudsFront from "../../assets/image/clouds_front.png";
import clouds1 from "../../assets/image/clouds_back.png";
import { PopUpIslands } from "./PopUpIslands";
const Home = () => {
  const [OpenModal, setOpenModal] = useState(false);
  return (
    <SectionHome>
      <CloudsFront src={cloudsFront} />
      <Clouds2 src={clouds1} />
      <ContainerIstana>
        <Istana src={istana} onClick={() => setOpenModal(true)} />
      </ContainerIstana>
      <Istana2 src={istana2} />
      <Bird src={bird} />
      <Ship1 src={Ships1} />
      <Ship2 src={Ships2} />
      <Ship3 src={Ships3} />

      <PopUpIslands isOpen={OpenModal} onClose={() => setOpenModal(false)} />
    </SectionHome>
  );
};

export default Home;
