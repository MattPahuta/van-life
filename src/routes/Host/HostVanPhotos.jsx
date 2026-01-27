import { useOutletContext } from "react-router";

function HostVanPhotos(){
  const { van} = useOutletContext();

  return (
    <div className="grid">
      <img src={van.imageUrl} alt={`${van.name} van`} className="size-40 aspect-square object-cover rounded-lg" />
    </div>
  )
}

export default HostVanPhotos;