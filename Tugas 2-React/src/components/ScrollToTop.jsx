import { useEffect } from "react";
import { useLocation } from "react-router";

// Scroll ke atas setiap kali pindah halaman.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default ScrollToTop;
