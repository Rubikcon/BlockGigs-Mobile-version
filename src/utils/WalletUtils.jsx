// src/utils/walletUtils.js
import detectEthereumProvider from '@metamask/detect-provider';

export const connectWallet = async () => {
  try {
    const provider = await detectEthereumProvider();
    if (!provider) {
      throw new Error("Metamask is not installed.Please install Metmask to use this feature")
    }
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    // return the first account
    return accounts[0];
  } catch (err) {
    console.error("Failed to connect Metamask Wallet", err);
    throw err;
    //   const provider = await detectEthereumProvider();
    //   if (provider && provider === window.ethereum) {
    //     const accounts = await window.ethereum.request({
    //       method: 'eth_requestAccounts',
    //     });
    //     return accounts[0]; // Return the connected account
    //   } else {
    //     throw new Error('MetaMask is not installed. Please install it to connect.');
    //   }
    // } catch (error) {
    //   if (error.code === 4001) {
    //     console.log('User denied account access');
    //   } else {
    //     console.error('Failed to connect wallet:', error.message);
    //   }
    //   throw error;
  }
};
