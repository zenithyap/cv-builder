import InputCard from "./InputCard";
import EntryCard from "./EntryCard";

import educationIcon from "../assets/education.svg";

export default function EducationCard({
  activeIndex,
  setActiveIndex,
  education,
  setEducation,
}) {
  return (
    <InputCard
      icon={educationIcon}
      title="Education"
      isActive={activeIndex === 1}
      onShow={() => setActiveIndex(1)}
    >
      <div>
        <EntryCard
          entries={education}
          setEntries={setEducation}
          entryFields={[
            {label: 'school', type: 'text'},
            {label: 'qualifications', type: 'text'},
            {label: 'from', type: 'date'},
            {label: 'to', type: 'date'},
            {label: 'details', type: 'array'},
          ]}
        />
      </div>
    </InputCard>
  );
}
