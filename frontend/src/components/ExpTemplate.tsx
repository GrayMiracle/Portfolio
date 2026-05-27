import { useState, useEffect } from 'react'
import './exptemplate.css'

export interface ExperienceItems {
    role: string;
    company: string;
    location: string;
    date: string;
    tags: string[];
    description: string[];
    githubUrl?: string;
    liveUrl?: string;
    imageFolder: string;
    imageCount: number;
}

export const experiences: ExperienceItems[] = [
    {
        role: "Full-Stack Developer",
        company: "AS Studios",
        location: "Remote",
        date: "September 2023 - Present",
        tags: ["Lua", "UI Integration", "Distributed Services", "State Management"],
        description: [
            "Developed scalable distributed services in Lua enabling real-time data transfer across UI systems and backend services, supporting modular configuration, selection logic, and persistent inventory states across versions.",
            "Designed modular service components for interconnected frontend and backend systems, reducing cross-team dependencies.",
            "Led backend integration across 5+ specialized development teams, aligning different systems through CI/CD pipelines to ensure elements are cross-service compatible while reducing integration defects by ~33%.",
        ],
        githubUrl: '',
        liveUrl: '',
        imageFolder: 'ASstudios',
        imageCount: 4,
    },
    {
        role: "Systems Engineer",
        company: "Content Automation Program",
        location: "Cary, NC",
        date: "December 2025 - Present",
        tags: ["Python", "Systems Development", "Full-Stack"],
        description: [
            "Built and operate Python automation pipelines for a long-form media brand, supporting research, data processing, analytics, and publishing workflows.",
            "Developed Python tools to automate research, data aggregation, asset processing, and publishing tasks, reducing manual production workload by ~20% per video cycle.",
            "Built repeatable production workflows supporting 40-60 minute videos, helping the channel reach 1M+ views, 300K+ watch hours, and a 17:50 average watch duration.",
        ],
        githubUrl: '',
        liveUrl: '',
        imageFolder: 'ContentPipeline',
        imageCount: 3,
    },
    {
        role: "Systems Administrator Intern",
        company: "DBAF Group",
        location: "Remote",
        date: "October 2017 - April 2020",
        tags: ["Lua", "Bug Resolution", "Debugging", "Community Management"],
        description: [
            "Collaborated with developers to design and develop DBAF's datastores and multi experience synchronization, netting over 20 million visits and 1000+ concurrent players and increasing player retention by ~21%",
            "Improved testing efficiency across alpha and beta versions by nearly 200% through more efficient bug resolution.",
            "Assisted daily management loops within development and community servers to address user feedback and concerns.",
        ],
        githubUrl: '',
        liveUrl: '',
        imageFolder: 'DBAF',
        imageCount: 4,
    },
]

const ExpShowcase = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const total = experiences.length
    const currentExperience = experiences[currentIndex]

    const prevExp = () => {
        setCurrentIndex((prev) => (prev - 1 + total) % total)
    }

    const nextExp = () => {
        setCurrentIndex((prev) => (prev + 1) % total)
    }

    return (
        <div className = "experience-showcase">
            <div className = "exp-card">
                

                <div className = "exp-entry">
                    <button className = "exp-arrow left" onClick = {prevExp}> ← </button>
                    <button className = "exp-arrow right" onClick = {nextExp}> → </button>
                    <h3>{currentExperience.role}</h3>
                    <p className = "exp-data">
                        {currentExperience.company} | {currentExperience.location} | {currentExperience.date}
                    </p>
                    <ul className = "exp-description">
                        {currentExperience.description.map((bullet, index) => (
                            <li key = {index}>{bullet}</li>
                        ))}
                    </ul>
                    
                </div>

                
            </div>

            <div className = "dots">
                {experiences.map((_, index) => (
                    <button
                        key = {index}
                        className = {`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick = {() => setCurrentIndex(index)}
                    ></button>
                ))}
            </div>
        </div>
    )
}

export default ExpShowcase