import Hero from "../components/Hero";
import BookList from "../components/BookList";

function Home({ books }) {
  return (
    <>
      <Hero />
      <BookList books={books} title="Buku Pilihan Kami" />
    </>
  );
}

export default Home;
