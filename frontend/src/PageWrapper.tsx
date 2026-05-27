import { useState, useEffect } from 'react'
import type { ReactNode } from 'react'

interface Props {
    children: ReactNode;
    bgClass: string;
}

function PageWrapper({ children, bgClass }: Props) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
        return () => setLoaded(false);
    }, []);

    return (
        <div className = {`app-bg ${loaded ? 'fade-in' : ''}`}>
          <div className = {`background ${bgClass}`}></div>
          <div className="bg-overlay"></div>
          <div className = "container">
            {children}
          </div>
        </div>
    )
}

export default PageWrapper