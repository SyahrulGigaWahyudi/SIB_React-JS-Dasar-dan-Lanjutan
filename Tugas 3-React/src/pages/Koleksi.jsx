import { useState } from "react";
import SectionTitle from "../elements/SectionTitle";
import Button from "../elements/Button";
import BookList from "../components/BookList";
import AddBookForm from "../components/AddBookForm";

function Koleksi({ books, onAddBook }) {
  const [showForm, setShowForm] = useState(false);

  const handleAdd = (book) => {
    onAddBook(book);
    setShowForm(false);
  };

  return (
    <div className="container my-5">
      <SectionTitle
        title="Koleksi Buku"
        subtitle="Semua buku layak baca pilihan Libbybook."
      />
      <div className="text-center mb-4">
        <Button onClick={() => setShowForm(!showForm)}>
          {showForm ? "Tutup Form" : "+ Tambah Buku"}
        </Button>
      </div>
      {showForm && <AddBookForm onSubmit={handleAdd} />}
      <BookList books={books} />
    </div>
  );
}

export default Koleksi;
