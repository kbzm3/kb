import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import SkillCard from "../ui/SkillCard";
import skills from "../../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="
        py-28
        bg-slate-50
        dark:bg-slate-950
        scroll-mt-24
      "
    >
      <Container>
        <SectionTitle subtitle="What I Know" title="Skills & Exams Qualified" />

        <div
          className="
            grid
            sm:grid-cols-2
            lg:grid-cols-2
            gap-8
          "
        >
          {skills.map((group, index) => (
            <SkillCard
              key={index}
              category={group.category}
              items={group.items}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Skills;
