import { useState } from 'react'
import '../styles/resumeInputs.css'
import ProfileCard from './ProfileCard'

export default function ResumeInputs({ profile, setProfile }) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className='resume-inputs'>
            <ProfileCard 
                activeIndex={activeIndex} 
                setActiveIndex={setActiveIndex}
                profile={profile}
                setProfile={setProfile} />
        </div>
    )
}