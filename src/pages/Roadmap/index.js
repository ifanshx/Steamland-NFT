import React from "react";
import { Box, Hero1, SectionRoadmap } from "./Roadmap.style";
import Heros1 from "../../assets/image/hero-1.png";
const Roadmap = () => {
  return (
    <SectionRoadmap>
      <Box>
        <Hero1 src={Heros1} />
      </Box>
    </SectionRoadmap>
  );
};

export default Roadmap;
