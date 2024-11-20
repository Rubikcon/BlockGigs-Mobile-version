import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import PageLoader from "../components/Loader/PageLoader";
import DashboardLayout from "../layout/DashboardLayout";

const Home = lazy(() => import("../components/LandingPage/Landingpage"));
// const HomeLayout = lazy(() => import('../layout/HomeLayout'));
const Profile = lazy(() => import("../pages/Profile"));
const Settings = lazy(() => import("../pages/Settings"));
const Wallet = lazy(() => import("../pages/Wallet"));
const Messages = lazy(() => import("../pages/Messages"));
const Offers = lazy(() => import("../pages/Offers"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const MyGigs = lazy(() => import("../pages/MyGigs"));
const Discover = lazy(() => import("../pages/Discover"));
const Logout = lazy(() => import("../pages/Logout"));
const Signup = lazy(() => import("../utils/WalletUtils"));
const MetaMaskConnector = lazy(() =>
  import("../components/MetaMask/MetaMaskConnector")
);
const NotFound = lazy(() => import("../pages/404"));

// Define router with separate layouts
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* Root route - home page without sidebar */}
      <Route path="/" element={<Home />} />

      {/* <Route path="/" element={<HomeLayout />} > */}
      {/* <Route index element={<Home />} /> */}
      {/* <Route path='/join-waitlist-as-a-client' element={<Client />} /> */}
      {/* <Route path='/join-waitlist-as-a-talent' element={<Talent />} /> */}
      {/* </Route> */}

      {/* Dashboard routes under /dashboard path */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="my-gigs" element={<MyGigs />} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="discover" element={<Discover />} />
        <Route path="messages" element={<Messages />} />
        <Route path="offers" element={<Offers />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        <Route path="connect-metamask" element={<MetaMaskConnector />} />
      </Route>

      {/* Logout Route */}
      <Route path="/dashboard/logout" element={<Logout />} />

      {/* Signup with metamask */}
      <Route path="/signup" element={<Signup />} />
      {/* 404 Not Found Route */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const AllRoutes = () => (
  <div>
    {/* <div className="w-full mx-auto bg-white min-h-[100vh] font-opensans max-w-[1440px] text-[#0F160F]"> */}
    <Toaster />
    <Suspense fallback={<PageLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  </div>
);

export default AllRoutes;
