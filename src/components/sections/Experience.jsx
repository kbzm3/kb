import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ExperienceItem from "../ui/ExperienceItem";
import experience from "../../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="
        py-28
        bg-slate-50
        dark:bg-slate-950
        scroll-mt-24
      "
    >
      <Container>
        <SectionTitle subtitle="Professional Journey" title="Experience" />

        <div className="relative">
          {experience.map((item, index) => (
            <ExperienceItem key={index} item={item} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Experience;
