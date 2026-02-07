import { useOutletContext } from "react-router";

function HostVanInfo() {
  const { van} = useOutletContext();

  return (
    <dl className="space-y-2">
      <div>
        <dt className="font-bold inline mr-2">Name:</dt>
        <dd className="inline">{van.name}</dd>
      </div>
      <div>
        <dt className="font-bold inline mr-2">Type:</dt>
        <dd className="inline">{van.type}</dd>
      </div>
      <div>
        <dt className="font-bold inline mr-2">Description:</dt>
        <dd className="inline">{van.description}</dd>
      </div>
      <div>
        <dt className="font-bold inline mr-2">Visibility:</dt>
        <dd className="inline">Public</dd>
      </div>
    </dl>
  )
}

export default HostVanInfo;