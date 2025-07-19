import InputCard from "./InputCard";

import profileIcon from "../assets/profile.svg";

export default function ProfileCard({
  activeIndex,
  setActiveIndex,
  setProfile,
}) {
  function handleChange(e, key) {
    setProfile((prev) => ({ ...prev, [key]: e.target.value }));
  }

  return (
    <InputCard
      icon={profileIcon}
      title="Profile"
      isActive={activeIndex === 0}
      onShow={() => setActiveIndex(0)}
    >
      <label htmlFor="name">name</label>
      <input type="text" id="name" onChange={(e) => handleChange(e, "name")} />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        onChange={(e) => handleChange(e, "email")}
      />

      <label htmlFor="portfolio">Portfolio</label>
      <input
        type="text"
        id="portfolio"
        onChange={(e) => handleChange(e, "portfolio")}
      />

      <label htmlFor="github">Github</label>
      <input
        type="text"
        id="github"
        onChange={(e) => handleChange(e, "github")}
      />

      <label htmlFor="linkedin">LinkedIn</label>
      <input
        type="text"
        id="linkedin"
        onChange={(e) => handleChange(e, "linkedin")}
      />
    </InputCard>
  );
}
