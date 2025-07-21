import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ResumeInputs from './components/ResumeInputs'
import ResumePreview from './components/ResumePreview'

function App() {
  const [profile, setProfile] = useState({
      name: '',
      phone: '',
      email: '',
      portfolio: '',
      github: '',
      linkedin: '',
  })

  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  return (
    <>
      <Header />
      <div className='resume-container'>
        <ResumeInputs
          setProfile={setProfile}
          education={education}
          setEducation={setEducation}
          experience={experience}
          setExperience={setExperience} />
        <ResumePreview
          profile={profile}
          education={education}
          experience={experience} />
      </div>
    </>
  )
}

export default App
