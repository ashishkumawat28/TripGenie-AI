
import { useState } from "react";
import {
  LayoutDashboard,
  Map,
  BookOpen,
  User,
  LogOut,
  Plane,
  Menu,
  X,
  Sparkles,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setMobileOpen(false);

    navigate("/");
  };

  const navClass = ({ isActive }) =>
    `
      relative
      flex
      items-center
      gap-2
      px-3
      py-2
      rounded-xl
      text-sm
      lg:text-base
      font-medium
      transition-all
      duration-300
      ${
        isActive
          ? "text-white bg-white/15 shadow-lg"
          : "text-white/75 hover:text-white hover:bg-white/10"
      }
    `;

  const closeMobile = () => {
    setMobileOpen(false);
  };

  return (
    <>
      {/* =====================================================
          DESKTOP / MAIN NAVBAR
      ====================================================== */}

      <nav
        className="
          fixed
          top-0
          left-0
          right-0
          z-50
          px-3
          sm:px-5
          lg:px-8
          pt-3
          sm:pt-4
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto
            h-[60px]
            sm:h-[60px]
            px-4
            sm:px-6
            rounded-2xl
            sm:rounded-3xl
            bg-black/25
            backdrop-blur-2xl
            border
            border-white/15
            shadow-2xl
            flex
            items-center
            justify-between
          "
        >

          {/* =================================================
              LOGO
          ================================================== */}

          <button
            onClick={() => navigate("/dashboard")}
            className="
              flex
              items-center
              gap-2
              sm:gap-3
              group
              shrink-0
            "
          >

            <div
              className="
                w-8
                h-8
                sm:w-9
                sm:h-9
                rounded-xl
                sm:rounded-2xl
                bg-white/10
                border
                border-white/15
                backdrop-blur-xl
                flex
                items-center
                justify-center
                group-hover:bg-white/20
                group-hover:rotate-6
                transition-all
                duration-300
              "
            >
              <img src={`/src/assets/logo.png`} alt="logo" />
            </div>


            <div className="text-left">

              <h1
                className="
                  text-xl
                  sm:text-xl
                  lg:text-xl
                  font-extrabold
                  tracking-tight
                  font-serif
                  font-normal
                  text-[#f0d77d]
                "
              >
                VOYARA
                <span className="text-cyan-300">
                  {" "}AI
                </span>
              </h1>

            </div>

          </button>


          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <div className="hidden italic lg:flex items-center gap-2">

            <NavLink
              to="/dashboard"
              className={navClass}
            >
              <LayoutDashboard size={17} />
              Dashboard
            </NavLink>


            <NavLink
              to="/planner"
              className={navClass}
            >
              <Map size={17} />
              Planner
            </NavLink>


            <NavLink
              to="/trips"
              className={navClass}
            >
              <BookOpen size={17} />
              My Trips
            </NavLink>


            <NavLink
              to="/profile"
              className={navClass}
            >
              <User size={17} />
              Profile
            </NavLink>

          </div>


          {/* =================================================
              DESKTOP LOGOUT
          ================================================== */}

          <button
            onClick={logout}
            className="
              hidden
              lg:flex
              items-center
              gap-2
              px-3.5
              py-1.5
              rounded-xl
              bg-[#d9b438]
              text-[#0a0f18]
              hover:bg-[#ead05b]
              italic
              border
              border-red-300/20
              font-semibold
              shadow-lg
              hover:-translate-y-0.5
              transition-all
              duration-300
            "
          >
            <LogOut size={18} />
            Logout
          </button>


          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="
              lg:hidden
              w-11
              h-11
              rounded-xl
              bg-white/10
              border
              border-white/15
              text-white
              flex
              items-center
              justify-center
              hover:bg-white/20
              transition
            "
            aria-label="Toggle menu"
          >

            {mobileOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}

          </button>

        </div>


        {/* ===================================================
            MOBILE MENU
        ==================================================== */}

        <div
          className={`
            lg:hidden
            max-w-7xl
            mx-auto
            mt-2
            overflow-hidden
            transition-all
            duration-300
            ${
              mobileOpen
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0 pointer-events-none"
            }
          `}
        >

          <div
            className="
              p-3
              rounded-2xl
              bg-black/40
              backdrop-blur-2xl
              border
              border-white/15
              shadow-2xl
            "
          >

            {/* Mobile navigation */}

            <NavLink
              to="/dashboard"
              onClick={closeMobile}
              className={navClass}
            >
              <LayoutDashboard size={20} />
              Dashboard
            </NavLink>


            <NavLink
              to="/planner"
              onClick={closeMobile}
              className={navClass}
            >
              <Map size={20} />
              Planner
            </NavLink>


            <NavLink
              to="/trips"
              onClick={closeMobile}
              className={navClass}
            >
              <BookOpen size={20} />
              My Trips
            </NavLink>


            <NavLink
              to="/profile"
              onClick={closeMobile}
              className={navClass}
            >
              <User size={20} />
              Profile
            </NavLink>


            {/* Divider */}

            <div className="h-px bg-white/10 my-2" />


            {/* Mobile logout */}

            <button
              onClick={logout}
              className="
                w-full
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-xl
                text-red-300
                hover:bg-red-500/10
                transition
              "
            >
              <LogOut size={20} />
              Logout
            </button>

          </div>

        </div>

      </nav>
    </>
  );
}

export default Navbar;