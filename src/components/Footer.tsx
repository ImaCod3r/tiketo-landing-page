import { Link } from 'react-scroll';
import { Instagram } from 'lucide-react';
import { Facebook } from 'lucide-react';

function Footer() {
    return (
        <footer>
            <div className="footer-grid">
                <div>
                    <a href="/" className="logo">
                        <img src={new URL('../assets/logo.png', import.meta.url).href} alt="logo" />
                    </a>
                    <p style={{ color: "#c6c6c6", fontSize: 14, maxWidth: "300px" }}>A infraestrutura invisível que faz o evento acontecer sem atrito — para quem organiza e para quem vai.</p>
                </div>

                <div className="col">
                    <h3>Links Rápidos</h3>

                    <ul>
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
                </div>

                <div className="col">
                    <h3>Parceiros</h3>

                    <ul>
                        <li>
                            <a href="https://sabimart.tech" target="_blank" rel="noopener noreferrer">
                                Sabimart MD
                            </a>
                        </li>
                        <li>
                            <a href="https://paysgator.com" target="_blank" rel="noopener noreferrer">
                                Paysgator
                            </a>
                        </li>
                        <li>
                            <a href="https://dtudo.shop" target="_blank" rel="noopener noreferrer">
                                D'tudo Shop
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <hr style={{ borderColor: "#c6c6c6", marginBottom: "2rem" }} />

            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <p style={{ color: "#c6c6c6", fontSize: 14 }}>
                    &copy; {new Date().getFullYear()} Tiketo. Todos os direitos reservados.
                </p>    

                <div>
                    <a href="https://www.instagram.com/tiketo.online" target="_blank" rel="noopener noreferrer">
                        <Instagram size={20} color="#c6c6c6" />
                    </a>
                    <a href="https://www.facebook.com/tiketo.online" target="_blank" rel="noopener noreferrer" style={{ marginLeft: 15 }}>
                        <Facebook size={20} color="#c6c6c6" />  
                    </a>
                </div>
            </div>

        </footer>
    )
}

export default Footer;