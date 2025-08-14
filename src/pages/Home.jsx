// Home.jsx
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-100 to-white flex items-center justify-center px-4 md:px-6">
      <div className="text-center max-w-2xl space-y-8 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-extrabold text-indigo-700 drop-shadow-lg">Welcome to VillageConnect</h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Your digital gateway to rural empowerment — access services, share knowledge,
          and grow your community with ease.
        </p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1937/1937591.png"
          alt="Village icon"
          className="mx-auto w-32 md:w-44 drop-shadow-md animate-bounce"
        />
        <Link
          to="/services"
          className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold shadow-md transition"
        >
          Explore Services
        </Link>
      </div>
    </section>
  );
}
