import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import StaticBanner from "../components/StaticBanner";

function Layout() {
  return (
    <>
      <StaticBanner />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
