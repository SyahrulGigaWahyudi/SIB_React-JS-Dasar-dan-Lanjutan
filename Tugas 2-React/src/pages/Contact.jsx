import SectionTitle from "../elements/SectionTitle";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import { contactInfo } from "../data/contact";

function Contact() {
  return (
    <div className="container my-5">
      <SectionTitle
        title="Hubungi Kami"
        subtitle="Punya rekomendasi buku atau pertanyaan? Kirim pesan ke kami."
      />
      <div className="row g-4 justify-content-center">
        <div className="col-lg-4">
          <ContactInfo items={contactInfo} />
        </div>
        <div className="col-lg-6">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
