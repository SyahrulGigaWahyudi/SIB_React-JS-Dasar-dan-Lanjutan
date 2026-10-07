import { useEffect, useState } from "react";
import NavbarComponent from "./Elements/navbar";
import Footer from "./Elements/footer";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Contact from "./pages/Contact";

const getPage = () => {
  const hash = window.location.hash.replace("#", "");
  return ["home", "team", "contact"].includes(hash) ? hash : "home";
};

function App() {
  const [page, setPage] = useState(getPage());

  useEffect(() => {
    const onHashChange = () => {
      setPage(getPage());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <div className="App d-flex flex-column min-vh-100">
      <NavbarComponent active={page} />
      <main className="flex-grow-1">
        {page === "home" && <Home />}
        {page === "team" && <Team />}
        {page === "contact" && <Contact />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
