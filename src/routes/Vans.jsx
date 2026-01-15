import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Vans() {

  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => setVans(data.vans))
  }, []);

  const vanCards = vans.map((van) => (
    <li key={van.id} className="group p-2">
      <Link to={`/vans/${van.id}`}>
        <img
          src={van.imageUrl}
          alt={van.name}
          className="w-full aspect-square object-cover rounded-lg"
        />
        <div className="pt-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">{van.name}</h2>
          <p className="text-xl font-semibold flex flex-col">
            ${van.price}
            <span className="block font-normal text-sm self-end">
              /day
            </span>
          </p>
        </div>
        <span
          className={`inline-flex items-center px-4 py-1 rounded-md bg-orange-400 text-white font-semibold`}>
          {van.type}
        </span>
      </Link>
    </li>
  ));

  return (
    <main className="mx-auto max-w-2xl py-16 px-4">
      <h1 className="text-3xl font-bold">Explore our van options</h1>
      {/* Van filters */}
      <ul className="flex"></ul>
      {/* Van card grid */}
      <ul className="py-10 grid sm:grid-cols-2 gap-y-5 gap-x-2">
        {vanCards}
      </ul>
    </main>
  );
}

export default Vans;