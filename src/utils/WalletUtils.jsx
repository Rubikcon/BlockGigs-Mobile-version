// src/utils/walletUtils.js
import detectEthereumProvider from "@metamask/detect-provider";

export const connectWallet = async () => {
  try {
    const provider = await detectEthereumProvider();
    if (!provider) {
      throw new Error(
        "Metamask is not installed.Please install Metmask to use this feature"
      );
    } else {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
    }

    if (window.ethereum) {
      const accounts = await window.ethereum.request(
        { method: "eth_requestAccounts" }
        // return accounts[0]
      );
      return accounts[0];
    }
    // return the first account
    return accounts[0];
  } catch (err) {
    console.error("Failed to connect Metamask Wallet", err);
    throw err;
  }
};

export const handleWalletOnSignup = async (navigate) => {
  let accounts = "";
  try {
    if (!provider) {
      throw new Error(
        "Metamask is not installed.Please install Metmask to use this feature"
      );
    } else {
      accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      navigate("/register");
    }
    return accounts[0];
  } catch (err) {
    console.error("Failed to connect Metamask Wallet", err);
    throw err;
  }
};
