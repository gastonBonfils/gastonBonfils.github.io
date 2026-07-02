import { skills } from "../../portfolio";
import "./Skills.css";

const Skills = () => {
  if (!skills || skills.length === 0) return null;

  return (
    <section className="section skills" id="skills">
      <h2 className="section__title">Skills</h2>

      <div className="skills__categories">
        {skills.map((group) => (
          <div className="skills__category" key={group.category}>
            <h3 className="skills__category-title">{group.category}</h3>

            <ul className="skills__list">
              {group.items.map((skill) => (
                <li key={skill} className="skills__list-item btn btn--plain">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
