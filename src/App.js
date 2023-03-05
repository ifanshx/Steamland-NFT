import { WagmiConfig, createClient } from "wagmi";
import { getDefaultProvider } from "ethers";
import CenterPoint from "./routes";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

const client = createClient({
  autoConnect: false,
  provider: getDefaultProvider(),
});

function App() {
  return (
    <WagmiConfig client={client}>
      <CenterPoint />
    </WagmiConfig>
  );
}

export default App;
