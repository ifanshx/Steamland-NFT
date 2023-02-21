import React from "react";
import {
  FixedBot,
  LeftFixed,
  RightFixed,
  SectionHome,
  TextBot,
  Video,
} from "./Home.style";

const Home = () => {
  return (
    <SectionHome>
      <Video loop autoPlay muted />
      asdas
      {/* <FixedBot>
        <LeftFixed>asd</LeftFixed>
        <TextBot>
          <p>NOW OPEN</p>
          <p>
            MINT LIVE<span>//</span>
          </p>
        </TextBot>
        <RightFixed>
          <button>MINT</button>
        </RightFixed>
      </FixedBot> */}
    </SectionHome>
  );
};

export default Home;
