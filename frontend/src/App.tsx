import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import { SiPython, SiJavascript, SiTypescript, SiLua, SiReact, SiNodedotjs, SiFlask, SiMysql, SiFirebase, SiLinux } from 'react-icons/si'
import { DiJava } from "react-icons/di"
import ImageSlider from './components/ImgSlider.tsx'
import PageWrapper from './PageWrapper.tsx'
import ExpShowcase from './components/ExpTemplate.tsx'

const Images = (folder: string, count: number) =>
	Array.from({ length: count }, (_, i) => `${import.meta.env.BASE_URL}assets/${folder}Images/${i}.jpg`)

function App() {

	const introImages = Images("intro", 6)
	const aboutImages = Images("about", 6)
	const experienceImages = Images("experience", 5)
	const projectImages = [
		{ src: `${import.meta.env.BASE_URL}assets/projectImages/0.jpg`, url: '/projects/mintube' },
		{ src: `${import.meta.env.BASE_URL}assets/projectImages/1.jpg`, url: '/projects/portableai' },
		{ src: `${import.meta.env.BASE_URL}assets/projectImages/2.jpg`, url: '/projects/simengine' },
		{ src: `${import.meta.env.BASE_URL}assets/projectImages/3.jpg`, url: '/projects/mlpassivepredictor' },
		{ src: `${import.meta.env.BASE_URL}assets/projectImages/4.jpg`, url: '/projects/dokkandata' },
		{ src: `${import.meta.env.BASE_URL}assets/projectImages/5.jpg`, url: '/projects/discaitts' },
		{ src: `${import.meta.env.BASE_URL}assets/projectImages/6.jpg`, url: '/projects/dokkanguessr' },
		{ src: `${import.meta.env.BASE_URL}assets/projectImages/7.jpg`, url: '/projects/santaobby' },
	]

	const [activeSection, setActiveSection] = useState("intro")

	const introRef = useRef<HTMLDivElement | null>(null)
	const aboutRef = useRef<HTMLDivElement | null>(null)
	const experienceRef = useRef<HTMLDivElement | null>(null)
	const projectsRef = useRef<HTMLDivElement | null>(null)
	const mainContentRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const sections = [
			{ key: 'intro', ref: introRef },
			{ key: 'about', ref: aboutRef },
			{ key: 'experience', ref: experienceRef },
			{ key: 'projects', ref: projectsRef },
		]

		const observer = new IntersectionObserver(
			(entries) => {
				let mostVisible: { key: string; ratio: number } | null = null

				for (const entry of entries) {
					if (!entry.isIntersecting) continue

					const key = entry.target.getAttribute('data-section')
					if (!key) continue

					if (!mostVisible || entry.intersectionRatio > mostVisible.ratio) {
						mostVisible = {
							key,
							ratio: entry.intersectionRatio,
						}
					}
				}

				if (mostVisible) {
					setActiveSection(mostVisible.key)
				}
			},
			{
				root: mainContentRef.current,
				threshold: [0.25, 0.5, 0.75, 0.9],
			}
		)

		sections.forEach(({ ref }) => {
			if (ref.current) observer.observe(ref.current)
		})

		return () => observer.disconnect()
	}, [])

	// Scroll position

	useEffect(() => {
		const container = mainContentRef.current
		if (!container) return

		const handleScroll = () => {
			sessionStorage.setItem('homeScroll', String(container.scrollTop))
		}

		container.addEventListener('scroll', handleScroll)
		return () => container.removeEventListener('scroll', handleScroll)
	}, [])

	useEffect(() => {
		const container = mainContentRef.current
		if (!container) return

		const saved = sessionStorage.getItem('homeScroll')
		if (saved) {
			container.scrollTop = parseInt(saved)
		}
	}, [])

	// Main app content

	return (
		<PageWrapper bgClass="app-bg">
			<div id="main-content" className="mainapp" ref={mainContentRef}>

				<div className="top-divider"></div>

				{/* Intro */}
				<div
					ref={introRef}
					data-section="intro"
					className="home-container intro-container"
				>

					<div className="home-card intro-card">
						<main>
							<p>Hi, I'm</p>
							<h1 className="name">Bhavesh</h1>
							<p>A software engineer specializing in Backend, Full-stack, and Systems engineering.</p>
							<p>I build scalable systems, full-stack applications, and distributed services. </p>
							<Link to="/projects" style={{ textDecoration: 'none' }}>
								<h3>Check out my work here!</h3>
							</Link>
						</main>
					</div>

					<ImageSlider
						images={introImages}
						className="intro"
						isActive={activeSection === "intro"}
					/>

				</div>

				<div className="divider"></div>

				{/* About */}
				<div
					ref={aboutRef}
					data-section="about"
					className="home-container about-container"
				>

					<ImageSlider
						images={aboutImages}
						className="about"
						isActive={activeSection === "about"}
					/>

					<div className="home-card about-card">
						<main>
							<h2>About Me</h2>
							<p>Hey! My name is Bhavesh, and I'm a software engineer who primarily works on Backend, Full-stack, and systems development. I started my journey creating simple python macros for Roblox games, and have since progressed to working with studios, developing fullstack applications, and building various scalable systems with other teams.</p>
							<p>Through engineering, I have also made an impact with my digital media brand, accumulating 1M+ views and 300k+ watch hours</p>
							<p className="no-gap">The tech stacks I commonly work with include:</p>
							<ul className="tech-grid">
								<li className="python"><SiPython className="tech-icon" /> Python </li>
								<li className="javascript"><SiJavascript className="tech-icon" /> JavaScript </li>
								<li className="typescript"><SiTypescript className="tech-icon" /> TypeScript </li>
								<li className="java"><DiJava className="tech-icon" /> Java </li>
								<li className="lua"><SiLua className="tech-icon" /> Lua </li>
								<li className="react"><SiReact className="tech-icon" /> React </li>
								<li className="nodejs"><SiNodedotjs className="tech-icon" /> Node.js </li>
								<li className="flask"><SiFlask className="tech-icon" /> Flask </li>
								<li className="mysql"><SiMysql className="tech-icon" /> MySQL </li>
								<li className="firestore"><SiFirebase className="tech-icon" /> Firestore </li>
								<li className="linux"><SiLinux className="tech-icon" /> Linux </li>
							</ul>
						</main>
					</div>

				</div>

				<div className="divider"></div>

				{/* Experience */}
				<div
					ref={experienceRef}
					data-section="experience"
					className="home-container experience-container"
				>

					<div className="home-card experience-card">
						<main>
							<h2>Experience</h2>
							<p>Here are some of the professional roles I've had</p>
							<ExpShowcase />
						</main>
					</div>

					<ImageSlider
						images={experienceImages}
						className="experience"
						isActive={activeSection === "experience"}
					/>
				</div>

				<div className="divider"></div>

				{/* Projects */}
				<div
					ref={projectsRef}
					data-section="projects"
					className="home-container projects-container"
				>

					<ImageSlider
						images={projectImages}
						className="projects"
						isActive={activeSection === "projects"}
					/>

					<div className="home-card projects-card">
						<main>
							<h2>Projects</h2>
							<p>Here are some of the projects I've made.</p>
							<p>Click on each to learn more!</p>
						</main>
					</div>

				</div>

				<div className="divider"></div>

				{/* Contact */}
				<Link to="/contact" className="home-card contact-me-card" style={{ textDecoration: 'none' }}>
					<main>
						<h2>Contact Me</h2>
						<p>Feel free to reach out to me regarding potential opportunities</p>
					</main>
				</Link>

			</div>
		</PageWrapper>
	)
}

export default App
