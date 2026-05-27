import './contact.css'
import PageWrapper from './PageWrapper.tsx'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { BsTelephoneFill } from 'react-icons/bs'

function Contact() {
	return (
		<PageWrapper bgClass="contact-bg">
			<section className="contact-section">
				<div className="contact-card">

					{/* ── Header bar ── */}
					<div className="card-header">
						<span className="card-label">CONTACT ME</span>
						<span className="card-id">984-309-9060</span>
					</div>

					{/* ── Body ── */}
					<div className="card-body">

						{/* ── Left info ── */}
						<div className="card-left">
							<div className="card-row">
								<span className="card-dot" />
								<span className="card-field">NAME</span>
								<span className="card-value">Bhavesh Elangovan</span>
							</div>
							<div className="card-row">
								<span className="card-dot" />
								<span className="card-field">ROLE</span>
								<span className="card-value">Backend/Full-Stack/Systems Engineer</span>
							</div>
							<div className="card-row">
								<span className="card-dot" />
								<span className="card-field">LOCATION</span>
								<span className="card-value">Cary, NC</span>
							</div>
							<div className="card-row">
								<span className="card-dot" />
								<span className="card-field">PHONE</span>
								<a href="tel:+19843099060" className="card-value card-link">(984) 309-9060</a>
							</div>
							<div className="card-row">
								<span className="card-dot" />
								<span className="card-field">EMAIL</span>
								<a href="mailto:e.bhavesh07@gmail.com" className="card-value card-link">e.bhavesh07@gmail.com</a>
							</div>
						</div>

						{/* ── Right avatar ── */}
						<div className="card-right">
							<div className="card-avatar">
								<img src="https://archives.bulbagarden.net/media/upload/c/ca/Spr_FRLG_Red.png" alt="avatar" className="card-avatar-img" />
							</div>
						</div>

					</div>

					{/* ── Footer — links ── */}
					<div className="card-footer">
						<span className="card-label"></span>
						<div className="card-links">
							<a href="mailto:e.bhavesh07@gmail.com" className="card-link-btn" aria-label="Email">
								<HiMail />
							</a>
							<a href="https://www.linkedin.com/in/bhavesh-elangovan/" target="_blank" className="card-link-btn" aria-label="LinkedIn">
								<FaLinkedin />
							</a>
							<a href="https://github.com/GrayMiracle" target="_blank" className="card-link-btn" aria-label="GitHub">
								<SiGithub />
							</a>
							<a href="tel:+19843099060" className="card-link-btn" aria-label="Phone">
								<BsTelephoneFill />
							</a>
						</div>
					</div>

				</div>
			</section>
		</PageWrapper>
	)
}

export default Contact