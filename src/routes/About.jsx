import { Link } from "react-router-dom";

import aboutHero from "../assets/about-hero.png";

function About() {
  return (
    <>
      <img
        src={aboutHero}
        alt="Man sitting on top of van roof, gazing up at the stars"
      />
      <div className="py-8 px-5 space-y-12">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">
            Don’t squeeze in a sedan when you could relax in a van.
          </h1>
          <p>
            Our mission is to enliven your road trip with the perfect
            travel van rental. Our vans are recertified before each
            trip to ensure your travel plans can go off without a
            hitch. (Hitch costs extra 😉)
          </p>
          <p>
            Our team is full of vanlife enthusiasts who know firsthand
            the magic of touring the world on 4 wheels.
          </p>
        </div>

        {/* cta box */}
        <div className="p-5 bg-orange-400/60 space-y-5 rounded-lg">
          <h2 className="text-3xl font-semibold">
            Your destination is waiting.
            <br />
            Your van is ready.
          </h2>
          <Link
            className="inline-flex items-center justify-center rounded-md text-xl font-semibold bg-neutral-900 text-zinc-50 py-3 px-4 hover:bg-neutral-700 transition"
            to="/vans">
            Explore our vans
          </Link>
        </div>
      </div>
    </>
  );
}

export default About;
