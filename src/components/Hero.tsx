import { TicketCheck } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
    return (
        <div className="hero">
            <div>
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    O seu evento <br/>
                    <b>Começa aqui.</b>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    Sua nova plataforma para descobrir e garantir ingressos para as melhores experiências.
                </motion.p>

                <div className="buttons">
                    <button>
                        Explorar eventos
                        <TicketCheck size={20} />
                    </button>
                </div>
            </div>

            <motion.img 
                src={new URL("../assets/hero-image.png", import.meta.url).href} 
                alt="Hero" 
                
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.3 }} 
            />
        </div>
    )
}

export default Hero;