// src/App.tsx
import { AppProviders } from "./AppProvider";
import UploadPage from "./pages/UploadPage";
import "./App.css";
import { WalletConnection } from "./components/WalletConnection";
import "./App.css";

function App() {
  return (
    <AppProviders>
      <UploadPage>
      </UploadPage>
      <WalletConnection></WalletConnection>
    </AppProviders>
  );
}

export default App;
