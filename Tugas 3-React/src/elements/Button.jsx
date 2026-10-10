import { Link } from "react-router";
import BsButton from "react-bootstrap/Button";

// kalau ada prop `to`, tombol dirender sebagai link react-router
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
