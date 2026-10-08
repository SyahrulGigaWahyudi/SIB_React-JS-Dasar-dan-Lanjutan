import SectionTitle from "../elements/SectionTitle";
import BookList from "../components/BookList";
import { books } from "../data/books";

function Koleksi() {
  return (
    <div className="container my-5">
      <SectionTitle
        title="Koleksi Buku"
        subtitle="Semua buku layak baca pilihan Libbybook."
      />
      <BookList books={books} />
    </div>
  );
}

export default Koleksi;
