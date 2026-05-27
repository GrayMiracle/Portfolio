import './impact.css'
import PageWrapper from './PageWrapper.tsx'

function Impact() {
	return (
		<PageWrapper bgClass="impact-bg">
			<section className="impact-section">

				<div className="impact-left">

					<p className="impact-subtitle">My Greatest Impact</p>
					<h1 className="impact-title">Independent Media Brand</h1>
					<div className="impact-divider" />

					<p className="impact-desc">
						Built and scaled a long-form content brand from scratch: researching, scripting, and producing
						40-60 minute deep dives with consistently high audience retention.
					</p>

					<div className="impact-block">
						<p className="impact-block-label">Technical Work</p>
						<ul className="impact-list">
							<li>Built Python pipelines to automate video production workflows, reducing manual workload by ~20%</li>
							<li>Aggregated and processed data points for topic research and audience demand analysis</li>
							<li>Ran sentiment analysis on community discussions to identify high-interest content angles</li>
						</ul>
					</div>

					<div className="impact-block">
						<p className="impact-block-label">Results</p>
						<div className="impact-stats">
							<div className="impact-stat">
								<span className="impact-stat-value">1.2M+</span>
								<span className="impact-stat-label">Views</span>
							</div>
							<div className="impact-stat">
								<span className="impact-stat-value">349K</span>
								<span className="impact-stat-label">Watch Hours</span>
							</div>
							<div className="impact-stat">
								<span className="impact-stat-value">17 minute</span>
								<span className="impact-stat-label">Average View Duration</span>
							</div>
							<div className="impact-stat">
								<span className="impact-stat-value">13</span>
								<span className="impact-stat-label">Videos</span>
							</div>
						</div>
					</div>

				</div>

				<div className="impact-right">
					<div className="impact-img-card">
						<img src="${import.meta.env.BASE_URL}assets/analytics.png" alt="Channel Analytics" className="impact-img" />
					</div>
					<p className="impact-img-label">Channel Analytics - past 365 days</p>
				</div>

			</section>
		</PageWrapper>
	)
}

export default Impact