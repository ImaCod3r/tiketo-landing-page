function Organizers() {
    return (
        <section id="organizers">
            <div className="title">
                <p>Torne-se um</p>
                <h2>Organizador</h2>
            </div>

            <div className="content">
                <div>
                    <p>Você passa semanas planejando cada detalhe. Fecha local, contrata equipe, divulga, vende. E na hora H — a plataforma trava, o suporte some e você descobre taxas que nunca foram combinadas.</p>
                    <p>A Tiketo foi construída com esse cenário em mente. Aqui, você publica eventos em minutos, acompanha as vendas em tempo real e chega no dia do evento sabendo que a porta vai funcionar.</p>
                    <p>Sem surpresa. Sem achismo. Sem depender de ninguém.</p>

                    <button id="organizer-button">
                        Criar meu evento agora →
                    </button>

                    <p style={{ fontSize: 12 }}>Cada ingresso emitido pela Tiketo é único, rastreável e validado na entrada em tempo real. Ingresso clonado, fraude na porta, entrada indevida — isso não passa. Você sabe exatamente quem entrou, quando entrou e por qual ponto. O seu evento, sob controle do início ao fim.</p>
                </div>

                <img src={new URL("../assets/organizer-image.jpg", import.meta.url).href} alt="organizer" />
            </div>
        </section>
    )
}

export default Organizers;