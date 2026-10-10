import { useState } from "react";
import { Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Koleksi from "./pages/Koleksi";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import initialBooks from "./Utils/books";

function App() {
  // state buku ditaruh di sini supaya Home dan Koleksi pakai data yang sama
  const [books, setBooks] = useState(initialBooks);

  const addBook = (book) => {
    // id baru = id terbesar + 1
    const id = Math.max(...books.map((b) => b.id), 0) + 1;
    setBooks([...books, { ...book, id }]);
  };

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home books={books} />} />
        <Route path="koleksi" element={<Koleksi books={books} onAddBook={addBook} />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
