"use client";

import { useWallet } from "@aptos-labs/wallet-adapter-react";

export function WalletConnection() {
  const { connect, disconnect, connected, account, wallets } = useWallet();

  if (connected && account) {
    const addr = account.address.toString();

    return (
      <div>
        <div>
          <p>Connected</p>
          <p>
            {addr.slice(0, 6)}...{addr.slice(-4)}
          </p>
        </div>
        <button onClick={disconnect}>Disconnect</button>
      </div>
    );
  }

  return (
    <div>
      <p>Connect your wallet</p>

      {wallets.length === 0 && (
        <p style={{ fontSize: 12, opacity: 0.7 }}>
          Uygun wallet bulunamadı. Tarayıcıda bir Aptos cüzdanı olduğundan emin
          ol.
        </p>
      )}

      {wallets.map((w) => (
        <button
          key={w.name}
          onClick={() => connect(w.name)}
          style={{ display: "block", marginTop: 8 }}
        >
          Connect {w.name}
        </button>
      ))}
    </div>
  );
}
