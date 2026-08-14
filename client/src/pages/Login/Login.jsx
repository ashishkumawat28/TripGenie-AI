
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import API from "../../api/authApi";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import loginBg from "../../assets/login/login-bg.jpg";

function Login() {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const quotes = [
    {
      title: "Adventure Awaits",
      text: "Adventure begins where your comfort zone ends.",
    },
    {
      title: "Discover New Places",
      text: "Every destination has a story waiting for you.",
    },
    {
      title: "Travel Smarter",
      text: "Plan less, explore more with Voyara AI.",
    },
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await API.post("/auth/login", data);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      setUser(res.data.user);

      toast.success(res.data.message);

      navigate("/dashboard");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login Failed"
      );
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${loginBg})`,
      }}
    >

      {/* Dark Overlay */}

      <div className="min-h-screen bg-black/45 flex items-center justify-center px-6 py-10">

        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">
          <div className="hidden lg:block">

            <span
              className="
                inline-block
                font-serif font-normal
                font-extrabold
                px-5
                py-2
                rounded-full
                bg-white/10
                backdrop-blur-4xl
                border
                border-white/20
                text-[#f0df9a]
              "
            >
              ✈️ VOYARA AI
            </span>

            <div
              key={currentQuote}
              className="transition-all duration-700 animate-fade"
            >

              <h1 className="text-6xl font-serif font-normal font-bold text-white mt-8 leading-tight">

                {quotes[currentQuote].title}

              </h1>

              <p className="italic text-[#f0df9a] text-2xl mt-8 leading-10 max-w-xl">

                "{quotes[currentQuote].text}"

              </p>

            </div>

          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="
              bg-white/10
              backdrop-blur-1xl
              border
              border-white/20
              rounded-[35px]
              shadow-2xl
              p-10
              w-full
              max-w-lg
              mx-auto
            "
          >
            <h2 className="text-4xl font-serif font-normal font-extrabold text-white text-center">

                Welcome Back

            </h2>

            <p className="text-white/70 italic text-center mt-3 mb-10">

                Login to continue planning your dream trips.

            </p>


            <input
              {...register("email", {
                required: "Email is required",
              })}
              placeholder="Email Address"
              className="
                w-full
                bg-white/10
                backdrop-blur-xl
                border
                italic
                border-white/1
                rounded-xl
                p-4
                text-white
                placeholder:text-white/60
                outline-none
              "
            />

            <input
              type="password"
              {...register("password", {
                required: "Password is required",
              })}
              placeholder="Password"
              className="
                w-full
                mt-5
                bg-white/10
                backdrop-blur-xl
                border
                border-white/1
                rounded-xl
                italic
                p-4
                text-white
                placeholder:text-white/60
                outline-none
              "
            />

            <div className="flex justify-end mt-3">

              <button
                type="button"
                onClick={()=>navigate("/forgot-password")}
                className="italic text-[#f0df9a] hover:underline"
              >
                Forgot Password?
              </button>

            </div>

            <button
              disabled={isSubmitting}
              className="
                w-full
                mt-8
                py-4
                rounded-xl
                bg-[#d9b438]
                text-[#0a0f18]
                italic
                font-serif font-normal
                text-lg
                font-semibold
                transition-all
                duration-300
                hover:bg-[#ead05b]
                hover:-translate-y-1
                hover:shadow-[0_15px_40px_rgba(217,180,56,0.2)]
              "
            >

                {isSubmitting
                  ? "Logging in..."
                  : "Sign In"}

            </button>

            <div className="my-8 flex items-center">

              <div className="flex-1 h-px bg-white/20"></div>

              <span className="px-4 italic text-white/60">

                OR

              </span>

              <div className="flex-1 h-px bg-white/20"></div>

            </div>



            <p className="text-center italic text-white/70 mt-8">

              Don't have an account?

              <button
                type="button"
                onClick={() => navigate("/register")}
                className="text-cyan-300 ml-2 hover:underline"
              >
                Register
              </button>

            </p>


          </form>
        </div>

      </div>
    </div>

  );
}

export default Login;