import {
  LayoutDashboard,
  Map,
  BookOpen,
  User,
  LogOut,
  Plane,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";


function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const navClass = ({ isActive }) =>
    isActive
      ? "flex items-center gap-2 text-blue-600 font-semibold"
      : "flex items-center gap-2 text-gray-600 hover:text-blue-600 transition";

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">

      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <div
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <Plane className="text-blue-600" size={30} />

          <h1 className="text-3xl font-bold text-blue-700">
            TripGenie AI
          </h1>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-8">

          <NavLink
            to="/dashboard"
            className={navClass}
          >
            <LayoutDashboard size={20} />
            Dashboard
          </NavLink>

          <NavLink
            to="/planner"
            className={navClass}
          >
            <Map size={20} />
            Planner
          </NavLink>

          <NavLink
            to="/my-trips"
            className={navClass}
          >
            <BookOpen size={20} />
            My Trips
          </NavLink>

          <NavLink
            to="/profile"
            className={navClass}
          >
            <User size={20} />
            Profile
          </NavLink>

          <button
            onClick={logout}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl transition"
          >
            <LogOut size={18} />
            Logout
          </button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;