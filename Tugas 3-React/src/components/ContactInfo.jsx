function ContactInfo({ items }) {
  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body p-4">
        <h5 className="fw-bold mb-4">Informasi Kontak</h5>
        {items.map((item, i) => (
          <p key={item.label} className={i === items.length - 1 ? "mb-0" : "mb-3"}>
            {item.icon} <strong>{item.label}</strong>
            <br />
            {item.value}
          </p>
        ))}
      </div>
    </div>
  );
}

export default ContactInfo;
