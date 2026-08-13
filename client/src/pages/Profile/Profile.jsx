
import { useEffect, useState } from "react";
import API from "../../api/authApi";
import toast from "react-hot-toast";
import LoadingSkeleton from "../../components/common/LoadingSkeleton";

function Profile() {
  const [user, setUser] = useState(null);

  const [tripCount, setTripCount] = useState({
    totalTrips: 0,
    completedTrips: 0,
    pendingTrips: 0,
    savedTrips: 0,
  });

  const [loading, setLoading] = useState(true);

  const [preview, setPreview] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    fetchProfile();

    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, []);

  // =========================================================
  // FETCH PROFILE
  // =========================================================

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        toast.error("Please login again");
        return;
      }

      const profileRes = await API.get("/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const countRes = await API.get("/history/count", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(profileRes.data.user);

      setTripCount({
        totalTrips: countRes.data.totalTrips || 0,
        completedTrips: countRes.data.completedTrips || 0,
        pendingTrips: countRes.data.pendingTrips || 0,
        savedTrips: countRes.data.savedTrips || 0,
      });

    } catch (error) {
      console.error("Profile Error:", error);

      toast.error(
        error.response?.data?.message ||
        "Failed to load profile"
      );
    } finally {
      setLoading(false);
    }
  };


  // =========================================================
  // SELECT IMAGE
  // =========================================================

  const handleImageSelect = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;


    // Check file type

    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }


    // Check file size - 5 MB

    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image size must be less than 5 MB");
      return;
    }


    // Remove previous preview URL

    if (preview) {
      URL.revokeObjectURL(preview);
    }


    const previewUrl = URL.createObjectURL(file);

    setSelectedFile(file);
    setPreview(previewUrl);
  };


  // =========================================================
  // CANCEL IMAGE
  // =========================================================

  const cancelImage = () => {
    if (preview) {
      URL.revokeObjectURL(preview);
    }

    setPreview("");
    setSelectedFile(null);
  };


  // =========================================================
  // UPLOAD IMAGE
  // =========================================================

  const uploadImage = async () => {

    if (!selectedFile) {
      toast.error("Please select an image first");
      return;
    }


    try {

      setUploading(true);

      const token = localStorage.getItem("token");

      if (!token) {
        toast.error("Please login again");
        return;
      }


      // Create FormData

      const formData = new FormData();

      // IMPORTANT:
      // This "image" must match:
      // upload.single("image")

      formData.append("image", selectedFile);

      const res = await API.post(
        "/auth/profile/upload",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );


      // Update profile image immediately

      if (res.data.image) {

        setUser((prev) => ({
          ...prev,
          profileImage: res.data.image,
        }));

      }


      // Clear preview

      if (preview) {
        URL.revokeObjectURL(preview);
      }

      setPreview("");
      setSelectedFile(null);


      toast.success(
        res.data.message || "Profile updated successfully 🎉"
      );


    } catch (error) {
  

  toast.error(
    error.response?.data?.message ||
    error.message ||
    "Profile image upload failed"
  );
} finally {

      setUploading(false);

    }
  };


  // =========================================================
  // LOADING
  // =========================================================

  if (loading) {
    return <LoadingSkeleton />;
  }


  // =========================================================
  // USER NOT FOUND
  // =========================================================

  if (!user) {
    return (
      <div className="min-h-screen font-serif font-normal flex items-center justify-center bg-slate-950 text-white">
        Profile not found.
      </div>
    );
  }


  // =========================================================
  // UI
  // =========================================================

  return (
    <div
      className="
        min-h-screen
        bg-cover
        bg-center
        bg-no-repeat
        bg-fixed
      "
      style={{
        backgroundImage:
          `url("/src/assets/background/background-bg.jpg")`,
      }}
    >

      {/* Dark Overlay */}

      <div
        className="
          min-h-screen

          bg-black/50

          flex
          items-center
          justify-center

          p-4
          sm:p-6

          pt-24
          sm:pt-28
          pb-10
        "
      >


        {/* =================================================
            MAIN CARD
        ================================================== */}

        <div
          className="
            w-full
            max-w-3xl

            bg-white/[0.06]
            backdrop-blur-2xl

            border
            border-white/20

            rounded-[35px]

            shadow-[0_25px_80px_rgba(0,0,0,0.45)]

            p-6
            sm:p-10
          "
        >


          {/* =================================================
              PROFILE IMAGE
          ================================================== */}

          <div className="flex justify-center">

            <div className="relative">

              <div
                className="
                  w-32
                  h-32

                  sm:w-40
                  sm:h-40

                  rounded-full

                  overflow-hidden

                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600

                  flex
                  items-center
                  justify-center

                  text-white

                  text-5xl
                  sm:text-6xl

                  font-bold

                  border-4
                  border-white/30

                  shadow-[0_0_35px_rgba(59,130,246,0.35)]
                "
              >

                {/* Preview */}

                {preview ? (

                  <img
                    src={preview}
                    alt="Selected profile"
                    className="w-full h-full object-cover"
                  />

                ) : user.profileImage ? (

                  <img
                    src={user.profileImage}
                    alt={user.name}
                    className="w-full h-full object-cover"
                  />

                ) : (

                  user.name
                    ?.charAt(0)
                    .toUpperCase()

                )}

              </div>


              {/* =================================================
                  CAMERA BUTTON
              ================================================== */}

              <label
                className="
                  absolute
                  bottom-1
                  right-1

                  sm:bottom-2
                  sm:right-2

                  w-11
                  h-11

                  sm:w-12
                  sm:h-12

                  rounded-full

                  bg-cyan-500

                  border-2
                  border-white/30

                  flex
                  items-center
                  justify-center

                  cursor-pointer

                  hover:bg-cyan-400

                  hover:scale-110

                  transition-all

                  shadow-lg
                "
              >

                <span className="text-lg">
                  📷
                </span>


                <input
                  type="file"
                  accept="image/png,image/jpeg,image/jpg,image/webp"
                  hidden
                  onChange={handleImageSelect}
                  disabled={uploading}
                />

              </label>

            </div>

          </div>


          {/* =================================================
              USER INFORMATION
          ================================================== */}

          <div className="text-center mt-8">

            <p className="text-white/60 italic text-base sm:text-lg">
              Welcome
            </p>


            <h1
              className="
                text-3xl
                sm:text-5xl
                font-serif font-normal
                font-bold

                text-white

                mt-3
              "
            >
              {user.name}
            </h1>


            <p
              className="
                text-cyan-300

                mt-3
                sm:mt-4

                text-base
                sm:text-lg
                italic
                break-all
              "
            >
              {user.email}
            </p>

          </div>


          {/* =================================================
              TRIP STATS
          ================================================== */}

          <div
            className="
              grid

              grid-cols-1
              sm:grid-cols-2

              gap-4
              sm:gap-6

              mt-10
              sm:mt-12
            "
          >

            {/* Total */}

            <div
              className="
                bg-white/10
                backdrop-blur-xl

                border
                border-white/20

                rounded-3xl

                p-5
                sm:p-6
              "
            >

              <p className="text-white/60 text-sm">
                Total Trips
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
                🧳 {tripCount.totalTrips}
              </h2>

            </div>


            {/* Completed */}

            <div
              className="
                bg-green-500/10
                backdrop-blur-xl

                border
                border-green-400/20

                rounded-3xl

                p-5
                sm:p-6
              "
            >

              <p className="text-green-200 text-sm">
                Completed
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-green-300 mt-3">
                🟢 {tripCount.completedTrips}
              </h2>

            </div>


            {/* Pending */}

            <div
              className="
                bg-yellow-500/10
                backdrop-blur-xl

                border
                border-yellow-300/20

                rounded-3xl

                p-5
                sm:p-6
              "
            >

              <p className="text-yellow-200 text-sm">
                Pending
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-yellow-300 mt-3">
                🟡 {tripCount.pendingTrips}
              </h2>

            </div>


            {/* Saved */}

            <div
              className="
                bg-cyan-500/10
                backdrop-blur-xl

                border
                border-cyan-300/20

                rounded-3xl

                p-5
                sm:p-6
              "
            >

              <p className="text-cyan-200 text-sm">
                Saved Trips
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-cyan-300 mt-3">
                💾 {tripCount.savedTrips}
              </h2>

            </div>

          </div>


          {/* =================================================
              MEMBER SINCE
          ================================================== */}

          <div
            className="
              mt-6

              bg-white/10
              backdrop-blur-xl

              border
              border-white/20

              rounded-3xl

              p-5
              sm:p-6

              text-center
            "
          >

            <p className="text-white/60">
              Member Since
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-white mt-3">

              📅{" "}

              {user.createdAt
                ? new Date(user.createdAt).toLocaleDateString()
                : "N/A"}

            </h2>

          </div>


          {/* =================================================
              SAVE / CANCEL PHOTO
          ================================================== */}

          {preview && (

            <div
              className="
                mt-8

                flex
                flex-col
                sm:flex-row

                justify-center

                gap-3
                sm:gap-4
              "
            >

              {/* Cancel */}

              <button
                type="button"
                onClick={cancelImage}
                disabled={uploading}
                className="
                  w-full
                  sm:w-auto

                  px-8
                  py-3

                  rounded-xl

                  bg-red-500/20

                  border
                  border-red-400/30

                  text-red-300

                  hover:bg-red-500/30

                  disabled:opacity-50

                  transition
                "
              >
                Cancel
              </button>


              {/* Save */}

              <button
                type="button"
                onClick={uploadImage}
                disabled={uploading}
                className="
                  w-full
                  sm:w-auto

                  px-8
                  py-3

                  rounded-xl

                  bg-cyan-500/20

                  border
                  border-cyan-400/30

                  text-cyan-300

                  hover:bg-cyan-500/30

                  disabled:opacity-50

                  transition

                  font-semibold
                "
              >

                {uploading
                  ? "Uploading..."
                  : "Save Photo"}

              </button>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default Profile;