import { useState } from "react";
import FormField from "../elements/FormField";
import Button from "../elements/Button";

const empty = { title: "", author: "", year: "", description: "", image: "" };

function AddBookForm({ onSubmit }) {
  const [form, setForm] = useState(empty);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // value input selalu string, jadi tahun diubah ke number
    onSubmit({ ...form, year: Number(form.year) });
    setForm(empty);
  };

  return (
    <div className="card border-0 shadow-sm mx-auto mb-5" style={{ maxWidth: 640 }}>
      <div className="card-body p-4">
        <h5 className="fw-bold mb-3">Tambah Buku</h5>
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <FormField id="title" label="Judul" type="text" value={form.title} onChange={handleChange} required />
            </div>
            <div className="col-md-6">
              <FormField id="author" label="Penulis" type="text" value={form.author} onChange={handleChange} required />
            </div>
            <div className="col-md-4">
              <FormField id="year" label="Tahun" type="number" min="1000" max="2100" value={form.year} onChange={handleChange} required />
            </div>
            <div className="col-md-8">
              <FormField id="image" label="URL Gambar (opsional)" type="text" value={form.image} onChange={handleChange} />
            </div>
            <div className="col-12">
              <FormField id="description" label="Deskripsi" as="textarea" rows="3" value={form.description} onChange={handleChange} required />
            </div>
            <div className="col-12 d-grid">
              <Button type="submit">Simpan</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddBookForm;
