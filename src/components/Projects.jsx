import ProjectsData from "../data/ProjectsData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-base-content tracking-tighter">
            Creative{" "}
            <span className="italic font-light text-primary">Showcase</span>
          </h2>
          <p className="text-base-content/50 max-w-xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
            Where logic meets design. A collection of digital products built
            with precision and performance in mind.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ProjectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
