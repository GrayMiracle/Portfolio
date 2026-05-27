import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.tsx'

const DarkMode = () => {
    const [dark, setDark] = useState(true)
    const toggleTheme = () => setDark(!dark)

    return (
        <div className = {`layer ${dark ? 'dark' : 'light'}`}>
            <Navbar toggleTheme={toggleTheme} dark={dark} />
            <main>
                <Outlet context={{ dark, toggleTheme }} />
            </main>
        </div>
    )
}

export default DarkMode