import { useState } from 'react';
import './style/navBar.scss';


export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="#about"  >Egidijus Žarpnickas</a>
                    
                </div>
                
                <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
                    <ul className="nav-links">
                        <li><a href="#about" >Apie mane</a></li>
                        <li><a href="#experience">Patirtis</a></li>
                        <li><a href="#projects">Projektai</a></li>
                        <li><a href="#contact">Kontaktai</a></li>
                    </ul>
                </div>

                <div 
                    className={`hamburger ${isOpen ? 'active' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
}