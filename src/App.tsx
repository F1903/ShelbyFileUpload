// src/App.tsx
import { AppProviders } from "./AppProvider";
import UploadPage from "./pages/UploadPage";
import "./App.css";
import { WalletConnection } from "./components/WalletConnection";
import "./App.css";
import "./logo.css"; // <-- ekledik
import { SpeedInsights } from "@vercel/speed-insights/next"

function App() {
  return (
    <AppProviders>
      <div className="corner-logo">
        <img src="/camel.gif" alt="camel" className="camel-gif" />
        <span className="loper-text">loper</span>
      </div>
      <SpeedInsights></SpeedInsights>
      <UploadPage>
      </UploadPage>
    </AppProviders>
  );
}

export default App;
