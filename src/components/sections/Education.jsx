import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import EducationItem from "../ui/EducationItem";
import education from "../../data/education";

function Education() {
  return (
    <section
      id="education"
      className="
  py-28
  bg-white dark:bg-slate-950
  text-slate-900 dark:text-white
  scroll-mt-24
"
    >
      <Container>
        <SectionTitle subtitle="My Academic Journey" title="Education" />

        <div className="relative">
          {education.map((item, index) => (
            <EducationItem key={index} item={item} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Education;
