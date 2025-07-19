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

  return (
    <>
      <Header />
      <div className='resume-container'>
        <ResumeInputs
          setProfile={setProfile}
          education={education}
          setEducation={setEducation} />
        <ResumePreview
          profile={profile}
          education={education} />
      </div>
    </>
  )
}

export default App
