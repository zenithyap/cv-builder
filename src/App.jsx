import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ResumeInputs from "./components/ResumeInputs";
import ResumePreview from "./components/ResumePreview";

function App() {
  const [profile, setProfile] = useState({
    name: "",
    phone: "",
    email: "",
    portfolio: "",
    github: "",
    linkedin: "",
  });

  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [projects, setProjects] = useState([]);

  return (
    <>
      <Header />
      <div className="resume-container">
        <ResumeInputs
          profile={profile}
          setProfile={setProfile}
          education={education}
          setEducation={setEducation}
          experience={experience}
          setExperience={setExperience}
          projects={projects}
          setProjects={setProjects}
        />
        <ResumePreview
          profile={profile}
          education={education}
          experience={experience}
          projects={projects}
        />
      </div>
    </>
  );
}

export default App;
