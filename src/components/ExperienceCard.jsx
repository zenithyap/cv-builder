import InputCard from "./InputCard";
import EntryCard from "./EntryCard";

import experienceIcon from "../assets/work.svg";

export default function ExperienceCard({
  activeIndex,
  setActiveIndex,
  experience,
  setExperience,
}) {
  return (
    <InputCard
      icon={experienceIcon}
      title="Experience"
      isActive={activeIndex === 2}
      onShow={() => setActiveIndex(2)}
    >
      <EntryCard
        entries={experience}
        setEntries={setExperience}
        entryFields={[
          { label: "company", type: "text" },
          { label: "position", type: "text" },
          { label: "from", type: "date" },
          { label: "to", type: "date" },
          { label: "details", type: "array" },
        ]}
      />
    </InputCard>
  );
}
