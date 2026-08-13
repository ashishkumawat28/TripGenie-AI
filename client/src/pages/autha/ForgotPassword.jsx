import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";

import API from "../../api/authApi";

function ForgotPassword() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const [email, setEmail] = useState("");

  const [otp, setOtp] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirm, setShowConfirm] = useState(false);

  const [loading, setLoading] = useState(false);

  const [timer, setTimer] = useState(0);

  const [strength, setStrength] = useState("");

  // SEND OTP

  const sendOTP = async () => {
    try {
      setLoading(true);

      await API.post("/auth/forgot-password", {
        email,
      });

      toast.success("OTP sent successfully");

      setStep(2);
      setTimer(30);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  // VERIFY OTP

  const verifyOTP = async () => {
    try {
      setLoading(true);

      await API.post("/auth/verify-reset-otp", {
        email,
        otp,
      });

      toast.success("OTP verified");

      setStep(3);
    } catch (error) {
      toast.error(error.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  // RESET PASSWORD

  const resetPassword = async () => {
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");

      return;
    }

    try {
      setLoading(true);

      await API.post("/auth/reset-password", {
        email,
        password,
      });

      toast.success("Password changed successfully");

      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to reset password");
    } finally {
      setLoading(false);
    }
  };

  const checkStrength = (value) => {
    if (value.length < 6) {
      setStrength("Weak");
    } else if (value.match(/[A-Z]/) && value.match(/[0-9]/)) {
      setStrength("Strong");
    } else {
      setStrength("Medium");
    }
  };

  const resendOTP = async () => {
    try {
      await API.post("/auth/forgot-password", {
        email,
      });

      toast.success("OTP sent again");

      setTimer(30);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to resend OTP");
    }
  };

  useEffect(() => {
    if (timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div
      className="
min-h-screen
bg-cover
bg-center
flex
items-center
justify-center
"
      style={{
        backgroundImage: `url('/src/assets/login/login-bg.jpg')`,
      }}
    >
      <div
        className="
min-h-screen
w-full
bg-black/50
flex
items-center
justify-center
px-6
"
      >
        <div
          className="
w-full
max-w-md
bg-white/10
backdrop-blur-2xl
border
border-white/20
rounded-[35px]
shadow-2xl
p-10
"
        >
          <h1
            className="
text-4xl
font-bold
text-white
text-center
"
          >
            🔐 Reset Password
          </h1>

          <p
            className="
text-white/70
text-center
mt-3
mb-8
"
          >
            Recover your voyara account
          </p>

          {/* STEP 1 */}

          {step === 1 && (
            <>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="
w-full
p-4
rounded-xl
bg-white/10
border
border-white/20
text-white
placeholder:text-white/60
outline-none
"
              />

              <button
                onClick={sendOTP}
                disabled={loading}
                className="
w-full
mt-6
py-4
rounded-xl
bg-cyan-500
hover:bg-cyan-600
text-white
font-semibold
"
              >
                {loading ? "Sending..." : "Send OTP"}
              </button>
            </>
          )}

          {/* STEP 2 */}

          {step === 2 && (
            <>
              <input
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="
w-full
p-4
rounded-xl
bg-white/10
border
border-white/20
text-white
placeholder:text-white/60
outline-none
"
              />

              <button
                onClick={verifyOTP}
                disabled={loading}
                className="
w-full
mt-6
py-4
rounded-xl
bg-green-600
hover:bg-green-700
text-white
font-semibold
"
              >
                Verify OTP
              </button>
            </>
          )}

          <button
            onClick={resendOTP}
            disabled={timer > 0}
            className="
            mt-4
            text-cyan-300
            hover:underline
            disabled:opacity-50
            "
          >
            {timer > 0 ? `Resend OTP in ${timer}s` : "Resend OTP"}
          </button>

          {/* STEP 3 */}

          {step === 3 && (
            <>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    checkStrength(e.target.value);
                  }}
                  placeholder="New Password"
                  className="
                w-full
                p-4
                rounded-xl
                bg-white/10
                border
                border-white/20
                text-white
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

              <p
                className="
                mt-2
                text-sm
                text-white
                "
              >
                Password Strength:
                <span className="font-bold ml-2">{strength}</span>
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
                border
                border-white/20
                text-white
                placeholder:text-white/60
                outline-none
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
                onClick={resetPassword}
                disabled={loading}
                className="
w-full
mt-6
py-4
rounded-xl
bg-cyan-500
hover:bg-cyan-600
text-white
font-semibold
"
              >
                Reset Password
              </button>
            </>
          )}

          <button
            onClick={() => navigate("/login")}
            className="
w-full
mt-6
text-cyan-300
hover:underline
"
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
