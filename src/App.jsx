import "./App.css";
import { HowItWorks } from "./components/HowItWorks/HowItWorks";
import { Pricing } from "./components/Pricing/Pricing";
import { TrustAndSafety } from "./components/TrustAndSafety/TrustAndSafety";

function App() {
  return (
    <>
      <TrustAndSafety />
      <HowItWorks />
      <Pricing />
    </>
  );
}

export default App;
