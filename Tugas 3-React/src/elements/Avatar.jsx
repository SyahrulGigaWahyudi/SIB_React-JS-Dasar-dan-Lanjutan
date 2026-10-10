function Avatar({ name, color = "primary", size = 110 }) {
  return (
    <div
      className={`rounded-circle bg-${color} text-white d-flex align-items-center justify-content-center mx-auto mb-3 fs-1 fw-bold`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {name.charAt(0)}
    </div>
  );
}

export default Avatar;
