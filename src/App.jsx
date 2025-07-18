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

  return (
    <>
      <Header />
      <div className='resume-container'>
        <ResumeInputs
          setProfile={setProfile} />
        <ResumePreview
          profile={profile} />
      </div>
    </>
  )
}

export default App
