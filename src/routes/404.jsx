import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="max-w-2xl">
      <h1 className="mb-5 text-3xl">Uh oh. Looks like you've ventured too far off the beaten path</h1>
      <Link
        to="/"
        className="w-full block text-center py-3.5 px-2 text-white font-semibold bg-neutral-900 rounded-md"
      >
        Return to home
      </Link>
    </div>
  )
}

export default NotFound;