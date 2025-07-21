import { useState } from "react";
import "../styles/resumeInputs.css";
import ProfileCard from "./ProfileCard";
import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";
import ProjectsCard from "./ProjectsCard";

export default function ResumeInputs({
  profile,
  setProfile,
  education,
  setEducation,
  experience,
  setExperience,
  projects,
  setProjects,
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="resume-inputs">
      <ProfileCard
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        profile={profile}
        setProfile={setProfile}
      />
      <EducationCard
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        education={education}
        setEducation={setEducation}
      />
      <ExperienceCard
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        experience={experience}
        setExperience={setExperience}
      />
      <ProjectsCard 
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        projects={projects}
        setProjects={setProjects}
      />
    </div>
  );
}
