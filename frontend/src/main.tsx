import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import About from './About.tsx'
import Projects from './Projects.tsx'
import Impact from './Impact.tsx'
import Experience from './Experience.tsx'
import Contact from './Contact.tsx'
import DarkMode from './DarkMode.tsx'
import ProjectDetails from './ProjectDetails.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Router basename="/Portfolio">
			<Routes>
				<Route element={<DarkMode />}>
					<Route path='/about' element={<About />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/projects/:slug' element={<ProjectDetails />} />
					<Route path='/impact' element={<Impact />} />
					<Route path='/experience' element={<Experience />} />
					<Route path='/contact' element={<Contact />} />
					<Route path="/" element={<App />} />
				</Route>
			</Routes>
		</Router>
	</StrictMode>,
)
