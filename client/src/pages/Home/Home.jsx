// import Features from "../../components/home/Features";
// import PopularDestinations from "../../components/home/PopularDestinations";

// function Home() {
//   return (
//     <>
//       <section className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-6">
//         <h1 className="text-5xl font-bold text-center text-gray-800">
//           Plan Your Dream Trip with AI
//         </h1>

//         <p className="mt-6 text-lg text-center text-gray-600 max-w-2xl">
//           TripGenie AI helps you discover amazing destinations,
//           create smart travel plans, estimate your budget,
//           and make every journey unforgettable.
//         </p>

//         <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
//           Get Started
//         </button>
//       </section>

//       <Features />
//       <PopularDestinations />
//     </>
//   );
// }

// export default Home;


import Hero from "../../components/home/Hero";
import Features from "../../components/home/Features";
import PopularDestinations from "../../components/home/PopularDestinations";

function Home() {
  return (
    <>
      <Hero />

      <Features />

      <PopularDestinations />
    </>
  );
}

export default Home;