import { Link } from "react-scroll";
import { useState } from "react";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full flex justify-between items-center">
            <a className="logo">
                <img src={new URL('../assets/logo.png', import.meta.url).href} alt="" />
            </a>

            <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                ☰
            </button>

            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li>
                    <Link to="hero" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                        Início
                    </Link>
                </li>
                <li>
                    <Link to="howitworks" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                        Como funciona
                    </Link>
                </li>
                <li>
                    <Link to="organizers" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                        Organizadores
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                        Contactos
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;