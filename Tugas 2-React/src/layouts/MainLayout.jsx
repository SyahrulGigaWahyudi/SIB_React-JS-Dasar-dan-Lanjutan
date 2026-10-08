import { Outlet } from "react-router";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

// Template: kerangka halaman (navbar + konten + footer).
// <Outlet /> = tempat halaman anak (Home, Team, dst.) dirender.
function MainLayout() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <ScrollToTop />
      <NavbarComponent />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
