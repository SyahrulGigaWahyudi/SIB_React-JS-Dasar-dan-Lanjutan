import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import BookCard from "./BookCard";
import SectionTitle from "../elements/SectionTitle";
import "./booklist.css";

function BookList({ books, title }) {
  return (
    <Container className="card-list py-3">
      {title && <SectionTitle title={title} as="h2" />}
      <Row xs={1} sm={2} lg={3} className="g-4">
        {books.map((book) => (
          <Col key={book.id}>
            <BookCard {...book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default BookList;
