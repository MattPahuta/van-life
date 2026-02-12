import { Link } from "react-router-dom";

import homeHero from '../assets/home-hero.png';

function Home() {
  return (
    <div className="mx-auto py-16 px-4 text-white bg-cover bg-center relative" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${homeHero})` }}>
      <h1 className="mb-6 text-4xl font-bold">
        You got the travel plans, we got the travel vans.
      </h1>
      <p className="mb-10">
        Add adventure to your life by joining the #vanlife movement.
        Rent the perfect van to make your perfect road trip.
      </p>
      <Link className="flex items-center justify-center rounded-md text-xl font-semibold bg-orange-400 text-zinc-50 py-3 px-4 hover:bg-orange-300 transition" to="/vans">Find your van</Link>
    </div>
  );
}

export default Home;
