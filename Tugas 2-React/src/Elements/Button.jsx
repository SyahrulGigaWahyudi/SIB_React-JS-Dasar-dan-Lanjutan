import { Link } from "react-router";
import BsButton from "react-bootstrap/Button";

// Atom: tombol. Kalau ada prop `to`, otomatis jadi link react-router.
function Button({ to, variant = "primary", className = "", children, ...rest }) {
  if (to) {
    return (
      <BsButton as={Link} to={to} variant={variant} className={className} {...rest}>
        {children}
      </BsButton>
    );
  }
  return (
    <BsButton variant={variant} className={className} {...rest}>
      {children}
    </BsButton>
  );
}

export default Button;
