import { useParams, Link } from "react-router-dom";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaArrowLeft,
  FaCheckCircle,
  FaLightbulb,
  FaExclamationTriangle,
} from "react-icons/fa";
import ProjectsData from "../data/ProjectsData";
import { HashLink } from "react-router-hash-link";
import Footer from "../components/Footer";

const ProjectDetails = () => {
  // URL from project id
  const { id } = useParams();

  // find project by id
  const project = ProjectsData.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Project Not Found
          </h2>
          <Link to="/" className="btn btn-primary">
            Go Back Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-base-200 py-10">
        <div className="max-w-5xl mx-auto px-4">
          {/* Back Button */}
          <Link to="/" className="btn btn-ghost gap-2 mb-6">
            <FaArrowLeft />
            Back to Home
          </Link>

          {/* Project Header Card */}
          <div className="card bg-base-100 shadow-xl mb-8">
            {/* Project Image */}
            <figure className="h-64 md:h-96">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </figure>

            <div className="card-body">
              {/* Project Name */}
              <h1 className="card-title text-2xl md:text-3xl text-primary">
                {project.name}
              </h1>

              {/* Description */}
              <p className="text-gray-600 mt-2">{project.shortDescription}</p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-6">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary gap-2"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline gap-2"
                >
                  <FaGithub />
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Technologies Card */}
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h2 className="card-title text-xl text-primary mb-4">
                  🛠️ Technologies Used
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="badge badge-primary badge-lg py-3"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Features Card */}
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h2 className="card-title text-xl text-primary mb-4">
                  Key Features
                </h2>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Challenges Card */}
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h2 className="card-title text-xl text-primary mb-4">
                  <FaExclamationTriangle className="text-yellow-500" />
                  Challenges Faced
                </h2>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="badge badge-warning badge-sm mt-1">
                        {index + 1}
                      </span>
                      <span className="text-gray-600 text-sm">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Future Plans Card */}
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h2 className="card-title text-xl text-primary mb-4">
                  <FaLightbulb className="text-yellow-400" />
                  Future Improvements
                </h2>
                <ul className="space-y-3">
                  {project.futurePlans.map((plan, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="badge badge-success badge-sm mt-1">
                        {index + 1}
                      </span>
                      <span className="text-gray-600 text-sm">{plan}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Back to Projects */}
          <div className="text-center mt-12">
            <HashLink
              to="/#projects"
              smooth
              className="btn btn-primary btn-lg gap-2"
            >
              <FaArrowLeft />
              Back to All Projects
            </HashLink>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ProjectDetails;
