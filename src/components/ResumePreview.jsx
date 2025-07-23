import phone from "../assets/phone.svg";
import email from "../assets/mail.svg";
import portfolio from "../assets/portfolio.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

import "../styles/resumePreview.css";

const linkLabels = [
  { name: "phone", icon: phone },
  { name: "email", icon: email },
  { name: "portfolio", icon: portfolio },
  { name: "github", icon: github },
  { name: "linkedin", icon: linkedin },
];

export default function ResumePreview({
  profile,
  education,
  experience,
  projects,
}) {
  return (
    <div className="resume-preview">
      <h1 className="name">{profile.name}</h1>
      <div className="links-container">
        {linkLabels.map((label) => {
          return (
            profile[label.name] && (
              <div className="icon-container">
                <img src={label.icon} alt={`${label.name} icon`} />
                {label.name === "phone" ? (
                  profile[label.name]
                ) : (
                  <a
                    href={
                      label.name === "email"
                        ? `mailto:${profile[label.name]}`
                        : profile[label.name]
                    }
                  >
                    {profile[label.name]}
                  </a>
                )}
              </div>
            )
          );
        })}
      </div>

      <section>
        {education.length > 0 && <h2 className="section-title">Education</h2>}
        {education.map((entry) => (
          <div>
            <div className="date-row bold">
              <p>{entry.school}</p>
              <p>
                {entry.from && (
                  <p>
                    {entry.from} - {entry.to}
                  </p>
                )}
              </p>
            </div>
            <p className="bold">{entry.qualifications}</p>
            <ul className="detail-preview-list">
              {entry.details.map((detail) => (
                <li>{detail.text}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section>
        {experience.length > 0 && <h2 className="section-title">Experience</h2>}
        {experience.map((entry) => (
          <div>
            <div className="date-row bold">
              <p>{entry.company}</p>
              <p>
                {entry.from && (
                  <p>
                    {entry.from} - {entry.to}
                  </p>
                )}
              </p>
            </div>
            <p className="bold">{entry.position}</p>
            <ul className="detail-preview-list">
              {entry.details.map((detail) => (
                <li>{detail.text}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section>
        {projects.length > 0 && <h2 className="section-title">Projects</h2>}
        {projects.map((entry) => (
          <div>
            <div className="bold">
              <p>{entry.name}</p>
            </div>
            <ul className="detail-preview-list">
              {entry.details.map((detail) => (
                <li>{detail.text}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}
