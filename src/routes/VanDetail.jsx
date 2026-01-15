import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function VanDetail() {
  const params = useParams();

  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then(res => res.json())
      .then(data => setVan(data.vans))
  }, [params.id]);

  console.log(van)

  return (
    <main className="mx-auto max-w-2xl">
      {van ? (
        <div className="p-6 space-y-4">
          <img
            className="w-full aspect-square object-cover rounded-lg"
            src={van.imageUrl}
            alt={van.name}
          />
          <span className={`inline-flex items-center px-4 py-1 rounded-md bg-orange-400 text-white font-semibold`}>{van.type}</span>
          <h1 className="text-3xl">{van.name}</h1>
          <p className="text-xl font-semibold">
            ${van.price}
            <span className="font-normal">
              /day
            </span>
          </p>
          <p className="">{van.description}</p>
          <button className="w-full flex items-center justify-center rounded-md text-xl font-semibold bg-orange-400 text-zinc-50 py-3 px-4 hover:bg-orange-300 transition">
            Rent this van
          </button>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </main>
  );
}

export default VanDetail;