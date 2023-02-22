import { WagmiConfig, createClient } from "wagmi";
import { getDefaultProvider } from "ethers";
import CenterPoint from "./routes";

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
