import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./cardlist.css";

const books = [
  {
    title: "Bumi",
    author: "Tere Liye",
    img: "/img/bumi.jpg",
    desc: "Petualangan Raib, Seli, dan Ali menjelajahi dunia paralel penuh rahasia dan kekuatan tak terduga.",
  },
  {
    title: "Laskar Pelangi",
    author: "Andrea Hirata",
    img: "/img/laskar-pelangi.jpg",
    desc: "Kisah inspiratif sepuluh anak Belitung yang berjuang meraih pendidikan dengan mimpi besar.",
  },
  {
    title: "Tanah Para Bandit",
    author: "Tere Liye",
    img: "/img/tanah-para-bandit.jpg",
    desc: "Cerita tentang kekuasaan, kejahatan, dan pilihan hidup di dunia yang dikuasai para bandit.",
  },
  {
    title: "Filosofi Teras",
    author: "Henry Manampiring",
    img: "/img/filosofi-teras.jpg",
    desc: "Filsafat Stoa untuk membangun mental yang tangguh dan hidup lebih tenang di masa kini.",
  },
  {
    title: "Negeri 5 Menara",
    author: "A. Fuadi",
    img: "/img/negeri-5-menara.jpg",
    desc: "Perjalanan enam santri di pondok pesantren dengan mantra sakti: man jadda wajada.",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    img: "/img/atomic-habits.jpg",
    desc: "Cara praktis membangun kebiasaan baik lewat perubahan kecil yang konsisten.",
  },
];

function Cardgrid() {
  return (
    <Container className="card-list py-3">
      <h2 className="fw-bold text-center mb-4">Buku Pilihan Kami</h2>
      <Row xs={1} sm={2} lg={3} className="g-4">
        {books.map((book) => (
          <Col key={book.title}>
            <Card className="card-list__card h-100">
              <Card.Img variant="top" src={book.img} alt={book.title} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {book.author}
                </Card.Subtitle>
                <Card.Text>{book.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Cardgrid;
