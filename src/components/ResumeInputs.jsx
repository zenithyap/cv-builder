import { useState } from "react";
import "../styles/resumeInputs.css";
import ProfileCard from "./ProfileCard";
import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";

export default function ResumeInputs({
  profile,
  setProfile,
  education,
  setEducation,
  experience,
  setExperience
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
    </div>
  );
}
