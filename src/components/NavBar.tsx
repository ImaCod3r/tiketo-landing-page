import { Link } from "react-scroll";

function NavBar() {
    return (
        <nav className="w-full flex justify-between items-center">
            <a className="logo">
                <img src={new URL('../assets/logo.png', import.meta.url).href} alt="" />
            </a>

            <ul className="nav-links">
                <li>
                    <Link to="hero">Início</Link>
                </li>
                <li>
                    <Link to="">Como funciona</Link>
                </li>
                <li>
                    <Link to="">Organizadores</Link>
                </li>
                <li>
                    <Link to="">Contactos</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;