import Card from "react-bootstrap/Card";

// Molecule: satu kartu buku.
function BookCard({ title, author, img, desc }) {
  return (
    <Card className="card-list__card h-100">
      <Card.Img variant="top" src={img} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
        <Card.Text>{desc}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BookCard;
