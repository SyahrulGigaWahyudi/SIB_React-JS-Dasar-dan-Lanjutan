import Button from "../elements/Button";

// Dirender oleh <Route path="*" /> untuk URL yang tidak dikenal.
function NotFound() {
  return (
    <div className="container my-5 text-center py-5">
      <p className="display-1 fw-bold text-primary mb-0">404</p>
      <h1 className="h3 fw-bold mb-3">Halaman tidak ditemukan</h1>
      <p className="text-muted mb-4">Sepertinya buku yang kamu cari belum ada di rak kami.</p>
      <Button to="/">Kembali ke Home</Button>
    </div>
  );
}

export default NotFound;
