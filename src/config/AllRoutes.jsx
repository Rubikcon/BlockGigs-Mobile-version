import { useState, Suspense, lazy } from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import PageLoader from "../components/Loader/PageLoader";
import DashboardLayout from "../layout/DashboardLayout";
import { handleWalletOnSignup } from "../utils/WalletUtils";
// Lazy-loaded components
const Home = lazy(() => import("../components/LandingPage/Landingpage"));
const Profile = lazy(() => import("../pages/Profile"));
const Settings = lazy(() => import("../pages/Settings"));
const Wallet = lazy(() => import("../pages/Wallet"));
const Messages = lazy(() => import("../pages/Messages"));
const Offers = lazy(() => import("../pages/Offers"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const MyGigs = lazy(() => import("../pages/MyGigs"));
const Discover = lazy(() => import("../pages/Discover"));
const Logout = lazy(() => import("../pages/Logout"));
const Signup = lazy(() => import("../components/Auth/Signup"));
const Signin = lazy(() => import("../components/Auth/Signin"));
const Register = lazy(() => import("../components/Auth/Register"));
const TalentPage = lazy(() => import("../components/Auth/Talentpage"));
const ClientPage = lazy(() => import("../components/Auth/Clientpage"));
const NotFound = lazy(() => import("../pages/404"));

const AllRoutes = () => {
  // Centralized form data state
  const [formData, setFormData] = useState({
    email: "",
    fullname: "",
    profession: "",
    workname: "",
  });

  // Update and Submit Handlers
  const handleUpdate = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const handleSubmit = () => {
    console.log("Final Form Data", formData);
    alert("Form Submitted");
  };

  const WalletRoute = () => {
    const navigate = useNavigate();

    React.useEffect(() => {
      handleWalletOnSignup(navigate);
    }, [navigate]);

    return <div> Connecting your wallet, please wait ...</div>;
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/* Public Routes */}
        <Route path="/connect-wallet" element={<WalletRoute />} />
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/signup"
          element={<Signup formData={formData} onUpdate={handleUpdate} />}
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/talentpage"
          element={
            <TalentPage
              formData={formData}
              onUpdate={handleUpdate}
              onSubmit={handleSubmit}
            />
          }
        />
        <Route
          path="/clientpage"
          element={
            <TalentPage
              formData={formData}
              onUpdate={handleUpdate}
              onSubmit={handleSubmit}
            />
          }
        />

        {/* Dashboard Routes */}
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="my-gigs" element={<MyGigs />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="discover" element={<Discover />} />
          <Route path="messages" element={<Messages />} />
          <Route path="offers" element={<Offers />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/dashboard/logout" element={<Logout />} />

        {/* Catch-All */}
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <div>
      <Toaster />
      <Suspense fallback={<PageLoader />}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
};

export default AllRoutes;
