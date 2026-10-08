import Hero from "../components/Hero";
import BookList from "../components/BookList";
import Button from "../elements/Button";
import { books } from "../data/books";

function Home() {
  return (
    <>
      <Hero />
      <BookList books={books} title="Buku Pilihan Kami" limit={3} />
      <div className="text-center mt-4">
        <Button to="/koleksi" variant="outline-primary">Lihat semua koleksi →</Button>
      </div>
    </>
  );
}

export default Home;
