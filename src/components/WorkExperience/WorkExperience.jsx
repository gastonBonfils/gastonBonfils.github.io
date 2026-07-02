import { experience } from "../../portfolio";
import "./WorkExperience.css";

const WorkExperience = () => {
  if (!experience || experience.length === 0) return null;

  return (
    <div className="experience center">
      <h2 className="experience__title">Work Experience</h2>

      <div className="experience__timeline">
        {experience.map((item, index) => (
          <div className="experience__item" key={index}>
            <div className="experience__dot" />
            <div className="experience__content">
              <h3>{item.role}</h3>
              <h4 className="experience__company">{item.company}</h4>
              <span className="experience__date">{item.date}</span>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
