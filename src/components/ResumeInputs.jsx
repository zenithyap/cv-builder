import { useState } from 'react'
import '../styles/resumeInputs.css'
import InputCard from './InputCard'

import profileIcon from '../assets/profile.svg'
import educationIcon from '../assets/education.svg'
import workIcon from '../assets/work.svg'
import projectsIcon from '../assets/projects.svg'

export default function ResumeInputs() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className='resume-inputs'>
            <InputCard
                icon={profileIcon}
                title='Profile'
                inputs={['Name', 'Email', 'Portfolio', 'Github', 'LinkedIn']}
                isActive={activeIndex === 0}
                onShow={() => setActiveIndex(0)} />
            <InputCard 
                icon={educationIcon} 
                title='Education'
                inputs={['School', 'Degree', 'GPA']}
                isActive={activeIndex === 1}
                onShow={() => setActiveIndex(1)} />
            <InputCard 
                icon={workIcon} 
                title='Work Experience'
                inputs={['Position', 'Company']}
                isActive={activeIndex === 2}
                onShow={() => setActiveIndex(2)} />
            <InputCard 
                icon={projectsIcon} 
                title='Projects'
                inputs={['Name']}
                isActive={activeIndex === 4}
                onShow={() => setActiveIndex(4)} />
        </div>
    )
}