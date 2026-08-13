import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./components/auth/ProtectedRoute";
import MainLayout from "./components/layout/MainLayout";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import Dashboard from "./pages/Dashboard/Dashboard";
import Planner from "./pages/Planner/Planner";
import Trips from "./pages/Trips/Trips";
import TripDetails from "./pages/TripDetails/TripDetails";
import Profile from "./pages/Profile/Profile";
import ForgotPassword from "./pages/autha/ForgotPassword";
import GoogleSuccess from "./pages/autha/GoogleSuccess";

import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        <Route
          path="/google-success"
          element={<GoogleSuccess />}
        />

        {/* Protected Routes */}

        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/planner" element={<Planner />} />

          <Route path="/trips" element={<Trips />} />

          <Route path="/trip/:id" element={<TripDetails />} />

          <Route path="/profile" element={<Profile />} />
        </Route>


        {/* 404 */}

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;



// function App() {
//   return (
//     <div>
//       <h1>Hello React</h1>
//     </div>
//   );
// }

// export default App;