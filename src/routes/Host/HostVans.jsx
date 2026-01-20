import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HostVans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanCards = vans.map((van) => (
    <li key={van.id} className="p-4 bg-white rounded-lg">
      <Link to={`/host/vans/${van.id}`}>
        <div className="flex items-center gap-3">
          <img src={van.imageUrl} alt={van.name} className="object-cover size-16 aspect-square rounded-sm" />
          <div>
            <h2 className="text-xl font-semibold">{van.name}</h2>
            <p>${van.price}/day</p>
          </div>
        </div>
      </Link>
    </li>
  ));

  return (
    <section className="mx-auto max-w-2xl space-y-6">
      <h1 className="text-2xl font-bold">Your listed vans</h1>
      {vans.length > 0 ? (
        <ul className="flex flex-col gap-3">{vanCards}</ul>
      ) : (
        <h2 className="text-xl font-semibold">Loading...</h2>
      )}
    </section>
  );
}

export default HostVans;
