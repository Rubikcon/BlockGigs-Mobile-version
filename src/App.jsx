import React from "react";
// import Landingpage from "./components/LandingPage/Landingpage";
import AllRoutes from "../src/config/AllRoutes";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Signup from "./components/Auth/Signup";
import Signin from "./components/Auth/Signin";
import Wallet from "./components/Auth/Wallet";
import Code from "./components/Auth/Code";
import Register from "./components/Auth/Register";
import Clientpage from "./components/Auth/Clientpage";
import Talentpage from "./components/Auth/Talentpage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/code" element={<Code />} />
          <Route path="/register" element={<Register />} />
          <Route path="/clientpage" element={<Clientpage />} />
          <Route path="/talentpage" element={<Talentpage />} />
        </Routes>
      </Router>
      <AllRoutes />
    </div>
  );
};

export default App;
