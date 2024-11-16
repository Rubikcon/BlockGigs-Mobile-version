import React, { useState, useEffect } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';

const SignUp = () => {
  const [account, setAccount] = useState(null);
  const [isMetaMaskAvailable, setIsMetaMaskAvailable] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [connecting, setConnecting] = useState(false); // For showing loading state on button

  // Email/Password form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Initialize MetaMask and check if it's available
  useEffect(() => {
    const setupMetaMask = async () => {
      try {
        const provider = await detectEthereumProvider();
        if (provider && provider === window.ethereum) {
          console.log('MetaMask is available!');
          setIsMetaMaskAvailable(true);
          await checkExistingAccount();
        } else {
          console.log('Please install MetaMask!');
          setError('Please install MetaMask.');
        }
      } catch (err) {
        setError('Failed to detect MetaMask.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    setupMetaMask();

    // Cleanup the event listener when the component is unmounted
    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('chainChanged', handleChainChanged);
      }
    };
  }, []);

  const handleChainChanged = () => {
    window.location.reload();
  };

  // Check if the user is already connected to MetaMask
  const checkExistingAccount = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_accounts',
      });
      if (accounts.length > 0) {
        setAccount(accounts[0]);
      }
    } catch (err) {
      console.error('Failed to check accounts', err);
    }
  };

  // Connect to the MetaMask wallet
  const connectWallet = async () => {
    setConnecting(true); // Set loading state when connecting
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      setAccount(accounts[0]);
    } catch (err) {
      if (err.code === 4001) {
        console.log('User denied account access');
      } else {
        console.error('Failed to connect wallet', err);
        setError('Failed to connect wallet.');
      }
    } finally {
      setConnecting(false); // Reset the loading state once finished
    }
  };

  // Handle email/password sign up
  // const handleEmailSignUp = (e) => {
  //   e.preventDefault();
  //   // Validate email and password (simple validation here)
  //   if (!email.includes('@')) {
  //     setEmailError('Please enter a valid email.');
  //     return;
  //   }
  //   if (password.length < 6) {
  //     setPasswordError('Password must be at least 6 characters.');
  //     return;
  //   }
  //   // Here, you'd handle the actual sign-up process (e.g., sending data to an API)
  //   console.log('Signing up with email:', email);
  //   setEmailError('');
  //   setPasswordError('');
  // };

  // If loading, show loading message
  if (loading) {
    return <div>Loading...</div>;
  }

  // If MetaMask is not available, display the error message
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="bg-white p-6 rounded-md max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>

      {/* MetaMask Wallet Connection */}
      {isMetaMaskAvailable ? (
        <>
          {account ? (
            <div className="text-center mb-6">
              <h3>Connected Account: {account}</h3>
              {/* Optionally add a disconnect button */}
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
              className="w-full p-3 bg-teal-500 text-white rounded mb-4"
              disabled={connecting}
            >
              {connecting ? 'Connecting...' : 'Connect with MetaMask'}
            </button>
          )}
        </>
      ) : (
        <p className="text-center text-red-500 mb-4">Please install MetaMask to connect your wallet.</p>
      )}
    </div>
  );
};

export default SignUp;
