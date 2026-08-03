import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import API from "../../api/authApi";

function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await API.post("/auth/register", data);

      toast.success(res.data.message);

      navigate("/login");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Something went wrong"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white  shadow-xl rounded-xl p-8 w-full max-w-md"
      >

        <h1 className="text-3xl font-bold text-center mb-6">
          Create Account
        </h1>

        <input
          {...register("name", {
            required: "Name is required",
          })}
          placeholder="Full Name"
          className="w-full border p-3 rounded-lg mb-2"
        />

        <p className="text-red-500 text-sm mb-3">
          {errors.name?.message}
        </p>

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
            minLength: {
              value: 6,
              message: "Minimum 6 characters",
            },
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
          {isSubmitting ? "Creating..." : "Register"}
        </button>

      </form>

    </div>
  );
}

export default Register;