import Button from "../elements/Button";

// Organism: banner utama halaman Home.
function Hero() {
  return (
    <div className="container my-5">
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
            Libbybook: Buku Layak Baca
          </h1>
          <p className="lead">
            Selamat datang di Libbybook, tempat rekomendasi buku-buku terbaik
            yang layak masuk rak kamu. Mulai dari novel inspiratif, fantasi,
            sampai buku pengembangan diri, semuanya kami kurasi supaya waktu
            bacamu nggak terbuang sia-sia.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <Button to="/koleksi" size="lg" className="px-4 me-md-2 fw-bold">
              Lihat Koleksi
            </Button>
            <Button to="/contact" variant="outline-secondary" size="lg" className="px-4">
              Hubungi Kami
            </Button>
          </div>
        </div>
        <div className="col-lg-4 offset-lg-1 p-0 text-center">
          <img
            className="img-fluid rounded-3 shadow-lg mb-4"
            src="/img/atomic-habits.jpg"
            alt="Atomic Habits"
            style={{ maxHeight: 420 }}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
