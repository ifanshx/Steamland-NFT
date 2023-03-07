import React from "react";
import {
  Box1,
  Box2,
  Box3,
  Box4,
  Box5,
  Clouds3,
  CloudsFront3,
  Hero1,
  Hero2,
  Hero3,
  Hero4,
  Hero5,
  Roadmaps,
  SectionRoadmap,
} from "./Roadmap.style";
import cloudsFront from "../../assets/image/clouds_front.png";
import clouds1 from "../../assets/image/clouds_back.png";
import Roadmapss from "../../assets/image/roadmap.png";
import Heros1 from "../../assets/image/Hero1.png";
import Heros2 from "../../assets/image/Hero2.png";
import Heros3 from "../../assets/image/Hero3.png";
import Heros4 from "../../assets/image/Hero4.png";
import Heros5 from "../../assets/image/Hero5.png";
const Roadmap = () => {
  return (
    <SectionRoadmap>
      <CloudsFront3 src={cloudsFront} />
      <Clouds3 src={clouds1} />
      <Roadmaps src={Roadmapss} />
      <Box1>
        <div>Chapter I.</div>
        <Hero1 src={Heros1} />
      </Box1>
      <Box2>
        {" "}
        <div>Chapter II.</div>
        <Hero2 src={Heros2} />
      </Box2>{" "}
      <Box3>
        <div>Chapter III.</div>
        <Hero3 src={Heros3} />
      </Box3>{" "}
      <Box4>
        <div>Chapter IV.</div>
        <Hero4 src={Heros4} />
      </Box4>{" "}
      <Box5>
        <div>Chapter V.</div>
        <Hero5 src={Heros5} />
      </Box5>
    </SectionRoadmap>
  );
};

export default Roadmap;
