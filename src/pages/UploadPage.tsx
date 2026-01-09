"use client";

import { FileUpload } from "@/components/FileUpload";
import { WalletConnection } from "@/components/WalletConnection";
import "./uploadPage.css";

export default function UploadPage() {
  return (
    <div className="page">
      <header className="header">
        <div className="headerLeft">
          <h1 className="title">Shelby File Upload</h1>
          <p className="subtitle">
            Faucet yap, Cüzdanını bağla, dosyanı seç ve Shelby ağına yükle. <h2>Petra wallet &#187; ayarlar &#187; network &#187; SHELBYNET. </h2>
          </p>
        </div>

        <div className="headerRight">
          <WalletConnection />
        </div>
      </header>

      <main className="main">
        <div className="card">
          <FileUpload />
        </div>

        <p className="hint">
          <a href= "https://docs.shelby.xyz/apis/faucet/shelbyusd">USD FAUCET</a> <br></br>
          <a href= "https://docs.shelby.xyz/apis/faucet/aptos">APT FAUCET </a>
        </p>
      </main>
    </div>
  );
}
