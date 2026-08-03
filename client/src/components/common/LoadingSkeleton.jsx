import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function LoadingSkeleton() {
  return (
    <div className="min-h-screen p-8">

      <Skeleton height={50} width={300} />

      <div className="grid md:grid-cols-3 gap-6 mt-10">

        {[1,2,3].map((item)=>(
          <Skeleton
            key={item}
            height={180}
            borderRadius={20}
          />
        ))}

      </div>

      <div className="mt-10">

        <Skeleton
          height={250}
          borderRadius={20}
        />

      </div>

    </div>
  );
}

export default LoadingSkeleton;