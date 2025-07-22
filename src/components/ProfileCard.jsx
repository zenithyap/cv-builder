import "../styles/profileCard.css";
import InputCard from "./InputCard";
import Input from "./Input";

import profileIcon from "../assets/profile.svg";

export default function ProfileCard({
  activeIndex,
  setActiveIndex,
  profile,
  setProfile,
}) {
  function handleChange(key, value) {
    setProfile((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <InputCard
      icon={profileIcon}
      title="Profile"
      isActive={activeIndex === 0}
      onShow={() => setActiveIndex(0)}
    >
      <div className="profile-inputs-container">
        <Input
          label="name"
          type="text"
          value={profile.name}
          handleChange={handleChange}
        />
        <Input
          label="phone"
          type="tel"
          value={profile.phone}
          handleChange={handleChange}
        />
        <Input
          label="email"
          type="email"
          value={profile.email}
          handleChange={handleChange}
        />
        <Input
          label="portfolio"
          type="text"
          value={profile.portfolio}
          handleChange={handleChange}
        />
        <Input
          label="github"
          type="text"
          value={profile.github}
          handleChange={handleChange}
        />
        <Input
          label="linkedin"
          type="text"
          value={profile.linkedin}
          handleChange={handleChange}
        />
      </div>
    </InputCard>
  );
}
