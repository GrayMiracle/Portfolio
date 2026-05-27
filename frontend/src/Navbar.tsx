import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './navbar.css'

interface NavbarProps {
  toggleTheme: () => void;
  dark: boolean;
}

const Navbar = ({ toggleTheme, dark }: NavbarProps) => {
    const navigate = useNavigate()
    const location = useLocation()
    const [scrolled, setScrolled] = useState(false)
    
    useEffect(() => {
        const container = document.getElementById('main-content')
        if (!container) return
        const handleScroll = () => setScrolled(container.scrollTop > 100)
        container.addEventListener('scroll', handleScroll)
        return () => container.removeEventListener('scroll', handleScroll)
    }, [location.pathname])

    useEffect(() => {
        if (location.pathname !== '/') setScrolled(false)
    }, [location.pathname])

    const handlePath = (path: string) => {
        if (path === '/' && location.pathname === '/') {
            const scrollContainer = document.getElementById('main-content')
            if (scrollContainer) {
                scrollContainer.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            }
        } else {
            navigate(path)
        }
        
    }

    return (
        <nav className = {`navbar ${dark ? 'dark' : 'light'}`}>
            <ul>
                <li><button className = "aboutbtn" onClick = {() => handlePath('/about')}>About</button></li>
                <li><button className = "projectsbtn" onClick = {() => handlePath('/projects')}>Projects</button></li>
                <li><button className = "impactbtn" onClick = {() => handlePath('/impact')}>Impact</button></li>
                <li><button className = "experiencebtn" onClick = {() => handlePath('/experience')}>Experience</button></li>
                <li><button className = "contactbtn" onClick = {() => handlePath('/contact')}>Contact</button></li>
                
                <li>
                    <button 
                        className={`home ${location.pathname === '/' && scrolled ? 'show-hint' : ''}`}
                        onClick={() => handlePath('/')}
                    >
                        {location.pathname === '/' && scrolled ? '↑ Back to Top' : 'Home'}
                    </button>
                </li>

                <button className = "theme" onClick = {toggleTheme}>
                    {dark ? '☀️' : '🌙'}
                </button>
            </ul>
        </nav>
    );
};

export default Navbar;