import './projects.css'
import PageWrapper from './PageWrapper.tsx'
import { Link } from 'react-router-dom'
import { projects } from './components/projectData.tsx'

function Projects() {

	return (
		<PageWrapper bgClass="projects-bg">

			<section className="projects-section">
				<h1>Projects</h1>

				<div className="projects-grid">

					{projects.map((project, index) => (
						<Link to={`/projects/${project.slug}`} key={index}>
							<article className="project-card">
								<div className="project-card-image" style={{ backgroundImage: `url("${project.image}")` }}></div>
								<div className="project-card-overlay">

									<p className="project-subtitle">{project.subtitle}</p>
									<h2 className="project-title">{project.title}</h2>
									<p className="project-description">{project.description}</p>
									<div className="project-tags">
										{project.tags.map((tag, tagIndex) => (
											<span key={tagIndex}>{tag}</span>
										))}
									</div>

								</div>

							</article>
						</Link>
					))}

				</div>

			</section>

		</PageWrapper>
	)
}

export default Projects
