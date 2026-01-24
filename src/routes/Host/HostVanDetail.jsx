import { useState, useEffect } from "react";
import { useParams, Link, NavLink } from "react-router-dom";

function HostVanDetail() {
  const { id } = useParams();
  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans[0]));
  }, [id]);

  if (!van) return <h1>Loading...</h1>;

  return (
    <section className="mx-auto max-w-2xl flex flex-col gap-8">
      {/* back to all vans link */}
      {/* update this to */}
      <Link to=".." relative="path" className="text-neutral-600">
        &larr;{" "}
        <span className="underline underline-offset-2">
          Back to all vans
        </span>
      </Link>
      {/* van detail card */}
      <div className="py-5 px-4 space-y-6 bg-white rounded-lg">
        <div className="flex items-center gap-4">
          <img
            src={van.imageUrl}
            alt={van.name}
            className="size-40 aspect-square object-cover rounded-lg"
          />
          <div className="flex flex-col items-start space-y-3">
            <p className="py-2 px-4 font-semibold bg-amber-600/90 text-white rounded-md">
              {van.type}
            </p>
            <h1 className="text-2xl font-semibold">{van.name}</h1>
            <p className="text-xl font-semibold">
              ${van.price}
              <span className="font-normal text-sm">/day</span>
            </p>
          </div>
        </div>

        <nav className="flex gap-4">
          <NavLink to="/details" end>
            Details
          </NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/photos">Photos</NavLink>
        </nav>
      </div>
    </section>
  );
}

export default HostVanDetail;
