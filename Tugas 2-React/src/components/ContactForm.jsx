import { useState } from "react";
import FormField from "../elements/FormField";
import Button from "../elements/Button";

const empty = { name: "", email: "", subject: "", message: "" };

// Organism: form kontak.
function ContactForm() {
  const [form, setForm] = useState(empty);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm(empty);
  };

  return (
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
              <FormField id="name" label="Nama" type="text" value={form.name} onChange={handleChange} required />
            </div>
            <div className="col-md-6">
              <FormField id="email" label="Email" type="email" value={form.email} onChange={handleChange} required />
            </div>
            <div className="col-12">
              <FormField id="subject" label="Subjek" type="text" value={form.subject} onChange={handleChange} required />
            </div>
            <div className="col-12">
              <FormField id="message" label="Pesan" as="textarea" rows="5" value={form.message} onChange={handleChange} required />
            </div>
            <div className="col-12 d-grid">
              <Button type="submit" size="lg" className="fw-bold">Kirim Pesan</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
