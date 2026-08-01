import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">

      <h1 className="text-5xl font-bold">
        Welcome {user?.name}
      </h1>

      <p className="mt-5 text-gray-600">
        AI Travel Dashboard
      </p>

    </div>
  );
}

export default Dashboard;