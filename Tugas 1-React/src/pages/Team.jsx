const members = [
  { name: "Syahrul", role: "Front-End Developer", bio: "Menyusun tampilan dan komponen React untuk Libbybook.", color: "primary" },
  { name: "Gigaindo123", role: "UI/UX Designer", bio: "Merancang tata letak dan pengalaman pengguna yang nyaman.", color: "success" },
  { name: "drackman", role: "Content Curator", bio: "Memilih dan menulis ulasan singkat buku-buku pilihan.", color: "danger" },
  { name: "mina", role: "Project Manager", bio: "Mengatur jadwal dan memastikan proyek selesai tepat waktu.", color: "warning" },
];

function Team() {
  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Tim Kami</h1>
        <p className="lead text-muted">
          Orang-orang di balik Libbybook yang suka buku dan suka ngoding.
        </p>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
        {members.map((m) => (
          <div className="col" key={m.name}>
            <div className="card h-100 text-center border-0 shadow-sm">
              <div className="card-body p-4">
                <div
                  className={`rounded-circle bg-${m.color} text-white d-flex align-items-center justify-content-center mx-auto mb-3 fs-1 fw-bold`}
                  style={{ width: 110, height: 110 }}
                >
                  {m.name.charAt(0)}
                </div>
                <h5 className="card-title fw-bold mb-1">{m.name}</h5>
                <p className="text-primary small mb-2">{m.role}</p>
                <p className="card-text text-muted small">{m.bio}</p>
              </div>
              <div className="card-footer bg-transparent border-0 pb-4">
                <a href="#team" className="btn btn-outline-secondary btn-sm me-1">GitHub</a>
                <a href="#team" className="btn btn-outline-secondary btn-sm">LinkedIn</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
