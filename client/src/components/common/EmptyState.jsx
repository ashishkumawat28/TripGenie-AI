import { Link } from "react-router-dom";

function EmptyState({
  icon = "🧳",
  title,
  description,
  buttonText,
  buttonLink,
}) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">

      <div className="text-7xl mb-6">
        {icon}
      </div>

      <h2 className="text-3xl font-bold text-gray-800">
        {title}
      </h2>

      <p className="text-gray-500 mt-3 max-w-md">
        {description}
      </p>

      {buttonText && (
        <Link
          to={buttonLink}
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition"
        >
          {buttonText}
        </Link>
      )}
    </div>
  );
}

export default EmptyState;