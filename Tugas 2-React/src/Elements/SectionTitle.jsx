function SectionTitle({ title, subtitle, as: Tag = "h1" }) {
  return (
    <div className="text-center mb-5">
      <Tag className="fw-bold">{title}</Tag>
      {subtitle && <p className="lead text-muted">{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;
