"use client";

import { FileUpload } from "@/components/FileUpload";
import { WalletConnection } from "@/components/WalletConnection";

export default function UploadPage() {
  return (
    <div>
      <header>
        <div>
          <h1>Shelby File Upload</h1>
          <WalletConnection />
        </div>
      </header>
      <main>
        <FileUpload />
      </main>
    </div>
  );
}