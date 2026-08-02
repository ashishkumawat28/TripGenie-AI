import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function LoadingSkeleton() {
  return (
    <div className="p-8">

      <Skeleton height={45} width={300} />

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <Skeleton height={150} borderRadius={20} />
        <Skeleton height={150} borderRadius={20} />
        <Skeleton height={150} borderRadius={20} />
      </div>

      <div className="mt-10">
        <Skeleton height={250} borderRadius={20} />
      </div>

    </div>
  );
}

export default LoadingSkeleton;