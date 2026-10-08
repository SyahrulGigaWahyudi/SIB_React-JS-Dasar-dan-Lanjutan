import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import BookCard from "./BookCard";
import SectionTitle from "../elements/SectionTitle";
import "./booklist.css";

// Organism: grid kartu buku. `limit` untuk menampilkan sebagian saja (preview di Home).
function BookList({ books, title, limit }) {
  const items = limit ? books.slice(0, limit) : books;
  return (
    <Container className="card-list py-3">
      {title && <SectionTitle title={title} as="h2" />}
      <Row xs={1} sm={2} lg={3} className="g-4">
        {items.map((book) => (
          <Col key={book.title}>
            <BookCard {...book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default BookList;
