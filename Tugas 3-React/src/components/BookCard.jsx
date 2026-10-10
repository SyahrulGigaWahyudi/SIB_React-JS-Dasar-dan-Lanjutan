import Card from "react-bootstrap/Card";

// gambar pengganti kalau file cover belum ada
const fallback =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="320"><rect width="100%" height="100%" fill="#e9f2fb"/><text x="50%" y="50%" fill="#6aaee6" font-size="22" font-family="sans-serif" text-anchor="middle">No Image</text></svg>'
  );

function BookCard({ title, author, year, description, image }) {
  return (
    <Card className="card-list__card h-100">
      <Card.Img
        variant="top"
        src={image || fallback}
        alt={title}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = fallback;
        }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {author} · {year}
        </Card.Subtitle>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BookCard;
