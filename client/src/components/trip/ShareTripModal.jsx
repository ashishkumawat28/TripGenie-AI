import toast from "react-hot-toast";

function ShareTripModal({ trip, onClose }) {
  if (!trip) return null;

  const summary = `
✈️ ${trip.tripTitle}

📍 Destination: ${trip.destination}

📅 Days: ${trip.days.length}

💰 Budget: ${trip.totalBudget}

Generated using voyara AI
`;

  const copySummary = async () => {
    await navigator.clipboard.writeText(summary);
    toast.success("Trip summary copied!");
  };

  const shareWhatsApp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(summary)}`;
    window.open(url, "_blank");
  };

  const shareEmail = () => {
    const url = `mailto:?subject=${encodeURIComponent(
      trip.tripTitle
    )}&body=${encodeURIComponent(summary)}`;

    window.location.href = url;
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white rounded-2xl p-8 w-[350px] shadow-2xl">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Share Your Trip
        </h2>

        <button
          onClick={copySummary}
          className="w-full bg-blue-600 text-white py-3 rounded-xl mb-4 hover:bg-blue-700"
        >
          📋 Copy Summary
        </button>

        <button
          onClick={shareWhatsApp}
          className="w-full bg-green-600 text-white py-3 rounded-xl mb-4 hover:bg-green-700"
        >
          💬 WhatsApp
        </button>

        <button
          onClick={shareEmail}
          className="w-full bg-red-600 text-white py-3 rounded-xl mb-4 hover:bg-red-700"
        >
          📧 Email
        </button>

        <button
          onClick={onClose}
          className="w-full border py-3 rounded-xl"
        >
          Close
        </button>

      </div>
    </div>
  );
}

export default ShareTripModal;