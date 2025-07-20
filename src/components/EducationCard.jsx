import InputCard from "./InputCard";
import Input from "./Input";
import MultipleInputs from "./MultipleInputs";
import "../styles/educationCard.css";

import educationIcon from "../assets/education.svg";

export default function EducationCard({
  activeIndex,
  setActiveIndex,
  education,
  setEducation,
}) {
  function handleAddEducation() {
    setEducation((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        school: "",
        qualifications: "",
        from: null,
        to: null,
        details: [],
      },
    ]);
  }

  function handleDeleteEducation(entry) {
    setEducation(education.filter((e) => e.id != entry.id));
  }

  function handleChange(id, key, value) {
    setEducation((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [key]: value } : item))
    );
  }

  return (
    <InputCard
      icon={educationIcon}
      title="Education"
      isActive={activeIndex === 1}
      onShow={() => setActiveIndex(1)}
    >
      <div className="education-form-container">
        {education.map((entry) => {
          const onChange = (key, value) => handleChange(entry.id, key, value);

          return (
            <div key={entry.id} className="education-form">
              <Input
                label="school"
                type="text"
                value={entry.school}
                handleChange={onChange}
              />

              <Input
                label="qualifications"
                type="text"
                value={entry.qualifications}
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
                data={education}
                setData={setEducation}
                parentId={entry.id}
              />

              <button onClick={() => handleDeleteEducation(entry)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
      <button onClick={handleAddEducation}>Add</button>
    </InputCard>
  );
}
