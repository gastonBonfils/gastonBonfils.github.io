import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import "./ProjectContainer.css";

const ProjectContainer = ({ project }) => (
  <div className="project">
    {project.image && (
      <img
        src={
          project.image.startsWith("http")
            ? project.image
            : `/images/${project.image}`
        }
        alt={`${project.name} screenshot`}
        className="project__image"
      />
    )}

    <div className="project__content">
      <h3>{project.name}</h3>

      <p className="project__description">{project.description}</p>

      {project.stack && (
        <ul className="project__stack">
          {project.stack.map((item) => (
            <li key={item} className="project__stack-item">
              {item}
            </li>
          ))}
        </ul>
      )}

      {project.sourceCode && (
        <a
          href={project.sourceCode}
          aria-label="Source code"
          className="link link--icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      )}

      {project.livePreview && (
        <a
          href={project.livePreview}
          aria-label="Live preview"
          className="link link--icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiExternalLink />
        </a>
      )}
    </div>
  </div>
);

export default ProjectContainer;
