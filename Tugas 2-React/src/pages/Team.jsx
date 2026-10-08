import SectionTitle from "../elements/SectionTitle";
import MemberCard from "../components/MemberCard";
import { members } from "../data/members";

function Team() {
  return (
    <div className="container my-5">
      <SectionTitle
        title="Tim Kami"
        subtitle="Orang-orang di balik Libbybook yang suka buku dan suka ngoding."
      />
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
        {members.map((m) => (
          <div className="col" key={m.name}>
            <MemberCard {...m} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
