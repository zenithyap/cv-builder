import InputCard from "./InputCard";
import Input from "./Input"
import MultipleInputs from "./MultipleInputs"

import experienceIcon from "../assets/work.svg";

export default function ExperienceCard({
  activeIndex,
  setActiveIndex,
  experience,
  setExperience,
}) {
  function handleAddExperience() {
    setExperience((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        company: "",
        position: "",
        from: null,
        to: null,
        details: [],
      },
    ]);
  }

  function handleDeleteExperience(entry) {
    setExperience(experience.filter((e) => e.id != entry.id));
  }

  function handleChange(id, key, value) {
    setExperience((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [key]: value } : item))
    );
  }

  return (
    <InputCard
      icon={experienceIcon}
      title="Experience"
      isActive={activeIndex === 2}
      onShow={() => setActiveIndex(2)}
    >
      <div>	
        {experience.map((entry) => {
          const onChange = (key, value) => handleChange(entry.id, key, value);

          return (
            <div key={entry.id} className="experience-form">
              <Input
                label="company"
                type="text"
                value={entry.company}
                handleChange={onChange}
              />

              <Input
                label="position"
                type="text"
                value={entry.position}
                handleChange={onChange}
              />

              <Input
                label="from"
                type="date"
                value={entry.from}
                handleChange={onChange}
              />

              <Input
                label="to"
                type="date"
                value={entry.to}
                handleChange={onChange}
              />

              <MultipleInputs
                label="details"
                value={entry.details}
                data={experience}
                setData={setExperience}
                parentId={entry.id}
              />

              <button onClick={() => handleDeleteExperience(entry)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
      <button onClick={handleAddExperience}>Add</button>
    </InputCard>
  );
}
