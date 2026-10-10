import { Outlet } from "react-router";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

function MainLayout() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <ScrollToTop />
      <NavbarComponent />
      <main className="flex-grow-1">
        {/* halaman sesuai route muncul di sini */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
