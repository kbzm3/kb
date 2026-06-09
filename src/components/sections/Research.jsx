import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ResearchCard from "../ui/ResearchCard";
import research from "../../data/research";

function Research() {
  return (
    <section
      id="research"
      className="
        py-28
        bg-white
        dark:bg-slate-950
        scroll-mt-24
      "
    >
      <Container>
        <SectionTitle
          subtitle="Academic Contributions"
          title="Research Publications"
        />

        {/* Journals */}
        <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
          Journal Articles
        </h3>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {research.journals.map((item, index) => (
            <ResearchCard key={index} item={item} />
          ))}
        </div>

        {/* Books */}
        <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
          Books & Chapters
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {research.books.map((item, index) => (
            <ResearchCard key={index} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Research;
