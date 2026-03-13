import { TicketCheck } from "lucide-react";

function Hero() {
    return (
        <div className="hero">
            <div>
                <h1 className="text-4xl font-bold text-white">
                    O seu evento <br/>
                    <b>Começa aqui.</b>
                </h1>
                <p className="text-lg text-white">Sua nova plataforma para descobrir e garantir ingressos para as melhores experiências.</p>

                <div className="buttons">
                    <button>
                        Explorar eventos
                        <TicketCheck size={20} />
                    </button>
                </div>
            </div>

            <img src={new URL("../assets/hero-image.png", import.meta.url).href} alt="Hero" />
        </div>
    )
}

export default Hero;