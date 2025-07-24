import { useState, useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import ResumeInputs from "./components/ResumeInputs";
import ResumePreview from "./components/ResumePreview";

import html2pdf from "html2pdf.js";

function App() {
  const pdfRef = useRef();
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

  function handleDownload() {
    const pdf = pdfRef.current;

    const opt = {
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: {
        scale: 5,
        useCORS: true,
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
      },
      pagebreak: { mode: ["avoid-all", "css", "legacy"] },
    };

    html2pdf().set(opt).from(pdf).save();
  }

  return (
    <>
      <Header handleDownload={handleDownload} />
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
          pdfRef={pdfRef}
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
