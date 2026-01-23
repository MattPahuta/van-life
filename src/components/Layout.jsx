import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <main className="py-16 px-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;