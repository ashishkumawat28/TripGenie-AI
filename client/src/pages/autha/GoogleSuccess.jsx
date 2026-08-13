import { useEffect, useContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthContext";

function GoogleSuccess() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { setUser } = useContext(AuthContext);

  useEffect(() => {
    const token = searchParams.get("token");
    const userData = searchParams.get("user");

    if (!token || !userData) {
      toast.error("Google authentication failed");
      navigate("/login");
      return;
    }

    try {
      const user = JSON.parse(
        decodeURIComponent(userData)
      );

      localStorage.setItem("token", token);
      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );

      setUser(user);

      toast.success("Google Login Successful");

      navigate("/dashboard");

    } catch (error) {
      console.error(error);

      toast.error("Google authentication failed");

      navigate("/login");
    }
  }, [navigate, searchParams, setUser]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="text-center">

        <div className="text-5xl mb-5">
          ✈️
        </div>

        <h1 className="text-2xl font-bold">
          Signing you in...
        </h1>

        <p className="text-gray-500 mt-2">
          Please wait while we complete your Google login.
        </p>

      </div>

    </div>
  );
}

export default GoogleSuccess;