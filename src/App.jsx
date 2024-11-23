import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Wallet from './components/Wallet';
import Code from './components/Code';
import Register from './components/Register';
import Clientpage from './components/Clientpage';
import Talentpage from './components/Talentpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Wallet" element={<Wallet />} />
        <Route path="/Code" element={<Code />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Clientpage" element={<Clientpage />} />
        <Route path="/Talentpage" element={<Talentpage />} />
      </Routes>
    </Router>
  );
}

export default App;
