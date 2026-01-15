import { FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import SkillCategory from "./SkillCategory";

const Skills = () => {
  // Skills Data
  const skillsData = {
    frontend: {
      title: "Frontend Development",
      description: "Building beautiful and responsive user interfaces",
      skills: [
        {
          name: "JavaScript",
          percentage: 85,
          icon: <FaJs />,
          color: "bg-yellow-500",
        },
        {
          name: "React",
          percentage: 80,
          icon: <FaReact />,
          color: "bg-cyan-500",
        },
        {
          name: "Next.js",
          percentage: 70,
          icon: <SiNextdotjs />,
          color: "bg-gray-800",
        },
        {
          name: "TailwindCSS",
          percentage: 90,
          icon: <SiTailwindcss />,
          color: "bg-teal-500",
        },
      ],
    },
    backend: {
      title: "Backend Development",
      description: "Creating robust server-side applications",
      skills: [
        {
          name: "Node.js",
          percentage: 75,
          icon: <FaNodeJs />,
          color: "bg-green-600",
        },
        {
          name: "Express.js",
          percentage: 75,
          icon: <SiExpress />,
          color: "bg-gray-700",
        },
        {
          name: "MongoDB",
          percentage: 70,
          icon: <SiMongodb />,
          color: "bg-green-500",
        },
      ],
    },
    tools: {
      title: "Tools & Platforms",
      description: "Technologies I use daily",
      skills: [
        {
          name: "Git",
          percentage: 80,
          icon: <FaGitAlt />,
          color: "bg-orange-600",
        },
        {
          name: "VS Code",
          percentage: 90,
          icon: <VscVscode />,
          color: "bg-blue-600",
        },
        {
          name: "Firebase",
          percentage: 70,
          icon: <SiFirebase />,
          color: "bg-yellow-500",
        },
        {
          name: "Vercel",
          percentage: 75,
          icon: <SiVercel />,
          color: "bg-gray-800",
        },
        {
          name: "Netlify",
          percentage: 70,
          icon: <SiNetlify />,
          color: "bg-teal-600",
        },
      ],
    },
  };

  // Additional skills list
  const additionalSkills = [
    "HTML5",
    "CSS3",
    "REST API",
    "JSON",
    "NPM",
    "Responsive Design",
    "GitHub",
    "Surge",
  ];

  return (
    <section id="skills" className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-base-content/80 max-w-2xl mx-auto text-lg">
            Here are the technologies and tools I work with to bring ideas to
            life
          </p>
        </div>

        {/* Skills Grid - 3 Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCategory category={skillsData.frontend} />
          <SkillCategory category={skillsData.backend} />
          <SkillCategory category={skillsData.tools} />
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-base-content mb-6">
            Other Technologies I'm Familiar With
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((tech, index) => (
              <span
                key={index}
                className="badge badge-lg badge-outline badge-primary py-4 px-4 text-sm font-medium hover:bg-primary hover:text-white transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
