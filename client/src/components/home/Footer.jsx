function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 dark:bg-slate-950 text-white py-12">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="  text-3xl font-bold mb-4">
            ✈️ TripGenie AI
          </h2>

          <p className=" ">
            AI-powered travel planning platform that creates personalized itineraries in seconds.
          </p>
        </div>

        <div>
          <h3 className="  font-bold mb-4">Quick Links</h3>

          <ul className="space-y-2  ">
            <li>Home</li>
            <li>Features</li>
            <li>Planner</li>
            <li>My Trips</li>
          </ul>
        </div>

        <div>
          <h3 className="  font-bold mb-4">Connect</h3>

          <p className="  text-gray-400">
            GitHub
          </p>

          <p className="  text-gray-400">
            LinkedIn
          </p>

          <p className="  text-gray-400">
            Email
          </p>
        </div>

      </div>

      <div className="text-white text-center text-gray-500 mt-10">
        © 2026 TripGenie AI. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;