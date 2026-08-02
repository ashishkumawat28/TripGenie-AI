import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-sky-50 to-blue-100 px-6">

      <h1 className="text-8xl font-bold text-blue-700">
        404
      </h1>

      <h2 className="text-4xl font-bold mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-4 text-center max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/dashboard"
        className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition"
      >
        🏠 Back to Dashboard
      </Link>

    </div>
  );
}

export default NotFound;