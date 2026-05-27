import { useState} from 'react'
import { experiences } from './components/ExpTemplate.tsx'
import PageWrapper from './PageWrapper.tsx'
import './experience.css'

const Images = (folder: string, count: number) => 
    Array.from({ length: count }, (_, i) => `${import.meta.env.BASE_URL}assets/experiences/${folder}Images/${i}.webp`)

function Experience() {
    const [expIndex, setExpIndex] = useState(0)
    const [slide, setSlide] = useState(0)

    const experience = experiences[expIndex]

    const detailImages = Images(experience.imageFolder, experience.imageCount)

    const prevExp = () => { setExpIndex(i => (i - 1 + experiences.length) % experiences.length); setSlide(0) }
    const nextExp = () => { setExpIndex(i => (i + 1) % experiences.length); setSlide(0) }

    const prev = () => setSlide(s => (s - 1 + detailImages.length) % detailImages.length)
    const next = () => setSlide(s => (s + 1) % detailImages.length)

    return (
        <PageWrapper bgClass = "detail-bg">
            <section className = "detail-section">

                {/* Left */}

                <div className = "detail-left">
                    
                <div className = "selection-row">
                    <button onClick={prevExp} className="detail-back">← Back</button>

                    <div className="exp-dots">
                        {experiences.map((_, i) => (
                            <button
                                key={i}
                                className={`exp-dot ${i === expIndex ? 'active' : ''}`}
                                onClick={() => { setExpIndex(i); setSlide(0) }}
                            />
                        ))}
                    </div>

                    <button onClick={nextExp} className="detail-next">Next →</button>
                </div>

                    <div className = "detail-info">
                        <h1 className = "detail-title">{experience.company}</h1>
                        <h2 className = "detail-role">{experience.role}</h2>
                        <p className = "detail-dates">{experience.date}</p>
                        <div className = "detail-tags">
                            {experience.tags.map((tag, i) => <span key = {i}>{tag}</span>)}
                        </div>

                        <div className = "detail-divider"/>

                        <h2 className = "detail-section-label"> Details </h2>
                        <div className = "detail-description">
                            {experience.description.map((line, index) => (
                                <p key={index} className = "experience-box">
                                    {line}
                                </p>
                            ))}
                        </div>

                        <div className = "detail-links">
                            {experience.githubUrl && <a href={experience.githubUrl} target="_blank">GitHub →</a>}
                            {experience.liveUrl  && <a href={experience.liveUrl}   target="_blank">Live →</a>}
                        </div>
                    </div>
                </div>

                <div className = "detail-right">
                    <div className="details-slider">

                        <div
                        className="details-slider-track"
                        style={{ transform: `translateX(-${slide * 100}%)` }}
                        >
                        {detailImages.map((src, i) => (
                            <div
                            key={i}
                            className="details-slide"
                            style={{ backgroundImage: `url(${src})` }}
                            />
                        ))}
                        </div>

                        <button className="details-btn left"  onClick={prev}>‹</button>
                        <button className="details-btn right" onClick={next}>›</button>

                        <div className="details-dots">
                        {detailImages.map((_, i) => (
                            <span
                            key={i}
                            className={i === slide ? 'active' : ''}
                            onClick={() => setSlide(i)}
                            />
                        ))}
                        </div>

                    </div>

                    <div className="details-thumbs">
                        {detailImages.map((src, i) => (
                        <div
                            key={i}
                            className={`details-thumb ${i === slide ? 'active' : ''}`}
                            style={{ backgroundImage: `url(${src})` }}
                            onClick={() => setSlide(i)}
                        />
                        ))}
                    </div>
                </div>
            </section>
        </PageWrapper>
    )
}

export default Experience