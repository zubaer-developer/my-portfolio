import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      {/* Project Image */}
      <figure className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body">
        {/* Project Name */}
        <h3 className="card-title text-lg">{project.name}</h3>

        {/* Short Description */}
        {/* line-clamp-2: show only two lines */}
        <p className="text-gray-600 text-sm line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Technologies Tags */}
        <div className="flex flex-wrap gap-2 my-3">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="badge badge-outline badge-primary badge-sm"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="badge badge-ghost badge-sm">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="card-actions justify-between items-center mt-auto">
          {/* View Details Button */}
          <Link
            to={`/project/${project.id}`}
            className="btn btn-primary btn-sm"
          >
            View Details
          </Link>

          {/* Quick Links */}
          <div className="flex gap-2">
            {/* Live Link */}
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-ghost btn-sm"
              title="Live Demo"
            >
              <FaExternalLinkAlt />
            </a>

            {/* GitHub Link */}
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-ghost btn-sm"
              title="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
