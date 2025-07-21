import InputCard from "./InputCard";
import EntryCard from "./EntryCard";

import projectsIcon from "../assets/projects.svg";

export default function ProjectsCard({
  activeIndex,
  setActiveIndex,
  projects,
  setProjects,
}) {
  return (
    <InputCard
      icon={projectsIcon}
      title="Projects"
      isActive={activeIndex === 3}
      onShow={() => setActiveIndex(3)}
    >
      <EntryCard
        entries={projects}
        setEntries={setProjects}
        entryFields={[
          { label: "name", type: "text" },
          { label: "details", type: "array" },
        ]}
      />
    </InputCard>
  );
}
