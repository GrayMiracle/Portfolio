import './about.css'
import { Link } from 'react-router-dom'
import PageWrapper from './PageWrapper.tsx'

function About() {
	return (
		<PageWrapper bgClass="about-bg">
			<section className="about-section">
				<p className="about-subtitle">I Am</p>
				<h1 className="about-title">Bhavesh Elangovan</h1>
				<div className="about-divider" />

				<p className="about-role">
					I love to <span>solve problems</span> that catch my attention.
				</p>

				<p className="about-bio">
					Distributed systems, Streaming services, AI pipelines, regardless of the stack, I work to map out an efficient solution before all else.
				</p>
				<p className="about-bio">
					With the help of engineering, I also built a digital media brand that hit 1M+ views and 300k+ watch hours through millions of impressions.
				</p>
				<div className="about-cta-row">
					<Link to="/contact" className="about-cta">Get in touch</Link>
					<Link to="/projects" className="about-cta">Learn more</Link>
				</div>

			</section>
		</PageWrapper>
	)
}

export default About