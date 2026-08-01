import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import API from "../../api/authApi";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md"
      >

        <h1 className="text-3xl font-bold text-center mb-6">
          Login
        </h1>

        <input
          {...register("email", {
            required: "Email is required",
          })}
          placeholder="Email"
          className="w-full border p-3 rounded-lg mb-2"
        />

        <p className="text-red-500 text-sm mb-3">
          {errors.email?.message}
        </p>

        <input
          type="password"
          {...register("password", {
            required: "Password is required",
          })}
          placeholder="Password"
          className="w-full border p-3 rounded-lg mb-2"
        />

        <p className="text-red-500 text-sm mb-4">
          {errors.password?.message}
        </p>

        <button
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>

      </form>

    </div>
  );
}

export default Login;