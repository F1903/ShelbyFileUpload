// src/App.tsx
import { AppProviders } from "./AppProvider";
import UploadPage from "./pages/UploadPage";
import "./App.css";
import { WalletConnection } from "./components/WalletConnection";
import "./App.css";
import "./logo.css"; // <-- ekledik

function App() {
  return (
    <AppProviders>
      <div className="corner-logo">
        <img src="/camel.gif" alt="camel" className="camel-gif" />
        <span className="loper-text">loper</span>
      </div>
      <UploadPage>
      </UploadPage>
      <WalletConnection></WalletConnection>
    </AppProviders>
  );
}

export default App;
