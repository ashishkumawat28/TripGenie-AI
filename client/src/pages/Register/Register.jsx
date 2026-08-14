
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import API from "../../api/authApi";
import { Eye, EyeOff } from "lucide-react";
import registerBg from "../../assets/register/register-bg.jpg";
function Register() {
  const navigate = useNavigate();

  const [showOTP, setShowOTP] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [password, setPassword] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const quotes = [
    {
      title: "Start Your Journey",
      text: "Every great adventure begins with a single step.",
    },
    {
      title: "Discover the World",
      text: "Travel farther, explore deeper, and create unforgettable memories.",
    },
    {
      title: "Plan Smarter",
      text: "Voyara AI builds your perfect itinerary in seconds.",
    },
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

  const [otp, setOtp] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await API.post("/auth/send-otp", {
        name: data.name,
        email: data.email,
        password: data.password,
      });

      toast.success("OTP sent successfully");

      setShowOTP(true);

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Failed to send OTP"
      );

    }
  };


  const verifyEmailOTP = async () => {
    try {

      const email = getValues("email");

      const res = await API.post("/auth/verify-otp", {
        email,
        otp,
      });

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      toast.success("Registration Successful");

      navigate("/dashboard");

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "OTP Verification Failed"
      );

    }
  };


  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${registerBg})`,
      }}
    >

      <div className="min-h-screen bg-black/45 flex items-center justify-center px-6 py-10">

        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">

          
          
          <div className="hidden lg:block">

          <span
            className="
              inline-block
              px-5
              py-2
              rounded-full
              bg-white/10
              backdrop-blur-4xl
              border
              border-white/20
              text-[#f0df9a]
              font-serif
              font-extrabold
            "
          >
            ✈️ VOYARA AI
          </span>

          <div
            key={currentQuote}
            className="transition-all duration-700 animate-fade"
          >

            <h1 className="text-6xl font-extrabold font-serif font-normal text-white mt-8 leading-tight">

              {quotes[currentQuote].title}

            </h1>

            <p className="text-[#f0df9a] text-2xl italic mt-8 leading-10 max-w-xl">

              "{quotes[currentQuote].text}"

            </p>

          </div>

          </div>



          <form
            onSubmit={handleSubmit(onSubmit)}
            className="
              bg-blue-100/15
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

            <h2 className="text-4xl font-bold text-white font-serif font-normal italic text-center">

              Create Account

            </h2>

            <p className="text-white/70 text-center mt-3 mb-10">

              Join Voyara and start planning smarter.

            </p>

            <input
              {...register("name", {
                required: "Name is required",
              })}
              placeholder="Full Name"
              className="
                w-full
                bg-white/10
                backdrop-blur-2xl
                border
                border-white/1
                rounded-xl
                p-4
                text-white
                italic
                placeholder:text-white/60
                outline-none
              "
            />

            <input
              {...register("email", {
                required: "Email is required",
              })}
              placeholder="Email Address"
              className="
                w-full
                mt-5
                bg-white/10
                backdrop-blur-2xl
                border
                border-white/1
                rounded-xl
                p-4
                text-white
                placeholder:text-white/60
                outline-none
                italic
              "
            />


            {showOTP && (

              <div className="mt-8 ">

                  <input
                      value={otp}
                      onChange={(e)=>setOtp(e.target.value)}
                      placeholder="Enter 6 Digit OTP"
                      className="
                          w-full
                          p-4
                          rounded-xl
                          bg-white/10
                          backdrop-blur-xl
                          border
                          border-white/20
                          text-white
                          placeholder:text-white/60
                          outline-none
                      "
                  />

                  <button
                      type="button"
                      onClick={verifyEmailOTP}
                      className="
                          w-full
                          mt-4
                          py-3
                          rounded-xl
                          bg-green-600
                          hover:bg-green-700
                          text-white
                          font-bold
                          font-serif font-normal
                      "
                  >

                      Verify OTP

                  </button>

                  <button
                      type="button"
                      onClick={async ()=>{

                          try{

                              const data=getValues();

                              await API.post("/auth/send-otp",{
                                  name:data.name,
                                  email:data.email,
                                  password:data.password,
                              });

                              toast.success("OTP Sent Again");

                          }catch(error){

                              toast.error(
                                  error.response?.data?.message
                              );

                          }

                      }}
                      className="
                          mt-4
                          text-cyan-300
                          hover:underline
                          italic
                      "
                  >

                      Resend OTP

                  </button>

              </div>

              )}


            <div className="relative mt-5">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="New Password"
                  className="
                w-full
                p-4
                rounded-xl
                bg-white/10
                backdrop-blur-xl
                border
                border-white/1
                text-white
                italic
                placeholder:text-white/60
                outline-none
                "
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="
                absolute
                right-4
                top-4
                text-white
                "
                >
                  {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                </button>
            </div>

        

            <p className="text-red-400 text-sm mt-2">
              {errors.password?.message}
            </p>

            <div className="relative mt-5">
                <input
                  type={showConfirm ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                  className="
                w-full
                p-4
                rounded-xl
                bg-white/10
                backdrop-blur-xl
                border
                border-white/1
                text-white
                placeholder:text-white/60
                outline-none
                italic
                "
                />

                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="
                absolute
                right-4
                top-4
                text-white
                "
                >
                  {showConfirm ? <EyeOff size={22} /> : <Eye size={22} />}
                </button>
            </div>


            <button
              disabled={ isSubmitting }
              className="
                w-full
                mt-8
                py-4
                rounded-xl
                bg-[#d9b438]
                text-[#0a0f18]
                hover:bg-[#ead05b]
                disabled:opacity-50
                text-lg
                font-semibold
                transition
                font-serif font-normal
              "
            >

              {isSubmitting ? "Creating..." : "Create Account"}

            </button>


            <button
              type="button"
              onClick={() => {
                window.location.href =
                  "http://localhost:5000/api/auth/google";
              }}
              className="
                w-full
                mt-5
                py-4
                rounded-xl
                bg-cyan-700
                hover:bg-cyan-600
                text-white
                font-semibold
                transition
                flex
                items-center
                justify-center
                gap-3
                font-serif font-normal
              "
            >
              <span className="text-xl">
                G
              </span>

              Continue with Google
            </button>


            <p className="text-center text-white/70 italic mt-8">

              Already have an account?

              <button
                type="button"
                onClick={() => navigate("/login")}
                className="text-cyan-300 ml-2 hover:underline"
              >

                Login

              </button>

            </p>

          </form>


        </div>


      </div>
    
    </div>
  );
}

export default Register;