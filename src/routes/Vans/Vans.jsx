import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

function Vans() {
  let [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => setVans(data.vans))
  }, []);

  const displayedVans = typeFilter ? vans.filter(van => van.type === typeFilter) : vans;

  const vanCards = displayedVans.map((van) => (
    <li key={van.id} className="group">
      <Link to={van.id} state={{ search: `?${searchParams.toString()}`, type: typeFilter }}>
        <img
          src={van.imageUrl}
          alt={van.name}
          className="w-full aspect-square object-cover rounded-lg"
        />
        <div className="pt-6 flex items-center justify-between">
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
    <div className="py-10 px-4">
      <h1 className="mb-8 text-3xl font-bold">Explore our van options</h1>
      {/* Van filters */}
      <ul className="py-4 flex gap-3">
        <li>
          <button 
            onClick={() => setSearchParams({type: "simple"})}
            className={`py-2 px-4 bg-orange-200 rounded-lg cursor-pointer ${typeFilter === 'simple' ? 'bg-orange-400' : ''}`}>Simple</button>
        </li>
        <li>
          <button 
            onClick={() => setSearchParams({type: "luxury"})}
            className={`py-2 px-4 bg-orange-200 rounded-lg cursor-pointer ${typeFilter === 'luxury' ? 'bg-orange-400' : ''}`}>Luxury</button>
        </li>
        <li>
          <button 
            onClick={() => setSearchParams({type: "rugged"})}
            className={`py-2 px-4 bg-orange-200 rounded-lg cursor-pointer ${typeFilter === 'rugged' ? 'bg-orange-400' : ''}`}>Rugged</button>
        </li>
        {typeFilter ? (
          <li>
            <button 
              onClick={() => setSearchParams({})}
              className="py-2 px-4 underline underline-offset-2 cursor-pointer">Clear filters</button>
          </li>
          ) : null}
      </ul>
      {/* Van card grid */}
      <ul className="grid gap-10 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-5">
        {vanCards}
      </ul>
    </div>
  );
}

export default Vans;