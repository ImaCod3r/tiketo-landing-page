import { Link } from "react-scroll";

function NavBar() {
    return (
        <nav className="w-full flex justify-between items-center">
            <a className="logo">
                <img src={new URL('../assets/logo.png', import.meta.url).href} alt="" />
            </a>

            <ul className="nav-links">
                <li>
                    <Link to="hero" smooth={true} duration={500}>
                        Início
                    </Link>
                </li>
                <li>
                    <Link to="howitworks" smooth={true} duration={500}>
                        Como funciona
                    </Link>
                </li>
                <li>
                    <Link to="organizers" smooth={true} duration={500}>
                        Organizadores
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>
                        Contactos
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;