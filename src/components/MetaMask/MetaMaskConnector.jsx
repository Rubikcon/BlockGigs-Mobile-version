import React, { useState, useEffect } from "react";
import detectEthereumProvider from "@metamask/detect-provider";

const ConnectWalletButton = () => {
  const [account, setAccount] = useState(null);
  const [isMetaMaskAvailable, setIsMetaMaskAvailable] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [error, setError] = useState(null);

  // Check if MetaMask is available
  useEffect(() => {
    const checkMetaMaskAvailability = async () => {
      const provider = await detectEthereumProvider();
      if (provider && provider === window.ethereum) {
        setIsMetaMaskAvailable(true);
        await checkExistingAccount();
      } else {
        setError("Please install MetaMask.");
      }
    };
    checkMetaMaskAvailability();
  }, []);

  // Check if the user is already connected to MetaMask
  const checkExistingAccount = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (accounts.length > 0) {
        setAccount(accounts[0]);
      }
    } catch (err) {
      console.error("Failed to check accounts", err);
    }
  };

  // Function to connect MetaMask wallet
  const connectWallet = async () => {
    setConnecting(true);
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
    } catch (err) {
      if (err.code === 4001) {
        console.log("User denied account access");
      } else {
        console.error("Failed to connect wallet", err);
        setError("Failed to connect wallet.");
      }
    } finally {
      setConnecting(false);
    }
  };

  // Handle the connection button's text and action
  return (
    <div>
      {isMetaMaskAvailable ? (
        account ? (
          <div className="text-center mb-6">
            <h3>Connected Account: {account}</h3>
            <button
              onClick={() => setAccount(null)}
              className="mt-2 p-2 bg-teal-500 text-white rounded"
            >
              Disconnect
            </button>
          </div>
        ) : (
          <button
            onClick={connectWallet}
            className="p-3 bg-teal-500 text-white rounded"
            disabled={connecting}
          >
            {connecting ? "Connecting..." : "Connect with MetaMask"}
          </button>
        )
      ) : (
        <p className="text-red-500">
          Please install MetaMask to connect your wallet.
        </p>
      )}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default ConnectWalletButton;
