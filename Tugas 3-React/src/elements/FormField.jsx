function FormField({ id, label, as = "input", ...props }) {
  const Control = as;
  return (
    <>
      <label htmlFor={id} className="form-label">{label}</label>
      <Control id={id} name={id} className="form-control" {...props} />
    </>
  );
}

export default FormField;
