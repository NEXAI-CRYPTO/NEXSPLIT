/* App.jsx – aus ChatGPT Canvas */
import React, { useState } from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { ConnectionProvider, WalletProvider, useWallet } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';

import './App.css';

const wallets = [new PhantomWalletAdapter()];
const network = clusterApiUrl('devnet');

export default function App() {
  return (
    <ConnectionProvider endpoint={network}>
      <WalletProvider wallets={wallets} autoConnect>
        <MainLayout />
      </WalletProvider>
    </ConnectionProvider>
  );
}

// ...restlicher Code wie aus Canvas (gekürzt für Übersichtlichkeit)