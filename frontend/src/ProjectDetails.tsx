import { useState} from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { projects } from './components/projectData.tsx'
import PageWrapper from './PageWrapper.tsx'
import './projectdetails.css'

const Images = (folder: string, count: number) => 
    Array.from({ length: count }, (_, i) => `/src/assets/projects/${folder}/${i}.jpg`)

function ProjectDetails() {
    const { slug } = useParams()
    const project = projects.find(p => p.slug === slug)
    const [slide, setSlide] = useState(0)
    const navigate = useNavigate()

    if (!project) {
        return <Navigate to="/projects" />
    }

    const detailImages = Images(project.slug, project.imageCount)

    const prev = () => setSlide(s => (s - 1 + detailImages.length) % detailImages.length)
    const next = () => setSlide(s => (s + 1) % detailImages.length)

    return (
        <PageWrapper bgClass = "detail-bg">
            <section className = "detail-section">

                {/* Left */}

                <div className = "detail-left">

                    <button onClick={() => navigate(-1)} className="detail-back">← Back</button>

                    <div className = "detail-info">
                        <p className = "detail-subtitle">{project.subtitle}</p>
                        <h1 className = "detail-title">{project.title}</h1>
                        <div className = "detail-tags">
                            {project.tags.map((tag, i) => <span key = {i}>{tag}</span>)}
                        </div>

                        <div className = "detail-divider"/>

                        <h2 className = "detail-section-label"> Details </h2>
                        <p className = "detail-description">{project.description}</p>

                        <div className = "detail-links">
                            {project.githubUrl && <a href={project.githubUrl} target="_blank">GitHub →</a>}
                            {project.liveUrl  && <a href={project.liveUrl}   target="_blank">Live →</a>}
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

export default ProjectDetails