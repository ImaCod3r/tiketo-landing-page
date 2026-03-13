

function About() {
    return (
        <section id="about">
            <div className="title">
                <p>Conheça mais</p>
                <h2>Sobre nós</h2>
            </div>

            <div className="content">
                <div>
                    <p>Eventos movimentam bilhões, conectam pessoas e criam memórias que duram anos. Mas a infraestrutura por trás deles ainda é lenta, opaca e cara. Plataformas ultrapassadas que cobram taxas absurdas, travam na porta e deixam o organizador no escuro.</p>
                    <p>A Tiketo nasceu para mudar isso. Construímos uma plataforma onde o organizador tem controle real — da venda ao portão — e o participante tem a experiência que merece: simples, segura e sem atrito. Não estamos aqui para ser mais uma opção. Estamos aqui para ser o padrão.</p>
                    <p>O mercado de eventos merecia mais. Então construímos.</p>

                    <button className="contact-button">
                        Fale conosco
                    </button>
                </div>

                <img src={new URL("../assets/phone-image.png", import.meta.url).href} alt="Sobre a Tiketo" />
            </div>
        </section>
    )
}

export default About;