import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Hubungi Kami</h1>
        <p className="lead text-muted">
          Punya rekomendasi buku atau pertanyaan? Kirim pesan ke kami.
        </p>
      </div>
      <div className="row g-4 justify-content-center">
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h5 className="fw-bold mb-4">Informasi Kontak</h5>
              <p className="mb-3">📍 <strong>Alamat</strong><br />Depok, Jawa Barat, Indonesia</p>
              <p className="mb-3">✉️ <strong>Email</strong><br />hello@libbybook.id</p>
              <p className="mb-3">📞 <strong>Telepon</strong><br />+62 812 3456 7890</p>
              <p className="mb-0">🕘 <strong>Jam Layanan</strong><br />Senin - Jumat, 09.00 - 17.00</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              {sent && (
                <div className="alert alert-success" role="alert">
                  Terima kasih! Pesanmu sudah terkirim.
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Nama</label>
                    <input id="name" name="name" type="text" className="form-control" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input id="email" name="email" type="email" className="form-control" value={form.email} onChange={handleChange} required />
                  </div>
                  <div className="col-12">
                    <label htmlFor="subject" className="form-label">Subjek</label>
                    <input id="subject" name="subject" type="text" className="form-control" value={form.subject} onChange={handleChange} required />
                  </div>
                  <div className="col-12">
                    <label htmlFor="message" className="form-label">Pesan</label>
                    <textarea id="message" name="message" rows="5" className="form-control" value={form.message} onChange={handleChange} required />
                  </div>
                  <div className="col-12 d-grid">
                    <button type="submit" className="btn btn-primary btn-lg fw-bold">Kirim Pesan</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
