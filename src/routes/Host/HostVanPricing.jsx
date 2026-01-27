import { useOutletContext } from "react-router";

function HostVanPricing() {
  const { van} = useOutletContext();

  return (
    <p className="text-2xl font-medium">${van.price}<span className="text-lg font-light">/day</span></p>
  )
}

export default HostVanPricing;