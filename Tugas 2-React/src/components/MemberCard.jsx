import Avatar from "../elements/Avatar";
import Button from "../elements/Button";

// Molecule: kartu anggota tim.
function MemberCard({ name, role, bio, color, github, linkedin }) {
  return (
    <div className="card h-100 text-center border-0 shadow-sm">
      <div className="card-body p-4">
        <Avatar name={name} color={color} />
        <h5 className="card-title fw-bold mb-1">{name}</h5>
        <p className="text-primary small mb-2">{role}</p>
        <p className="card-text text-muted small">{bio}</p>
      </div>
      <div className="card-footer bg-transparent border-0 pb-4">
        <Button as="a" href={github} variant="outline-secondary" size="sm" className="me-1">GitHub</Button>
        <Button as="a" href={linkedin} variant="outline-secondary" size="sm">LinkedIn</Button>
      </div>
    </div>
  );
}

export default MemberCard;
