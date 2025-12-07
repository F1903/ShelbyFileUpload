// src/App.tsx
import { AppProviders } from "./AppProvider";
import UploadPage from "./pages/UploadPage";
import "./App.css";
import { WalletConnection } from "./components/WalletConnection";
import "./App.css";
import "./logo.css"; // <-- ekledik
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <AppProviders>
      <div className="corner-logo">
        <img src="/camel.gif" alt="camel" className="camel-gif" />
        <span className="loper-text">loper</span>
      </div>
      <UploadPage>
      </UploadPage>
      <Analytics></Analytics>
      <SpeedInsights></SpeedInsights>
    </AppProviders>
  );
}

export default App;
