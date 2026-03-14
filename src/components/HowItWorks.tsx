function HowItWorks() {
    return (
        <section id="howitworks">
            <div className="title">
                <p>Agora você precisa entender</p>
                <h2>Como funciona</h2>
            </div>

            <div className="biglist">
                <div className="line">
                    <span>
                        1
                    </span>
                    <p>
                        Escolha seu evento
                        Navegue pelos eventos disponíveis e encontre o que você quer.
                    </p>
                </div>
                <div className="line">
                    <span>
                        2
                    </span>
                    <p>
                        Compre com segurança
                        Escolha a forma de pagamento que preferir e finalize em segundos.
                    </p>
                </div>
                <div className="line">
                    <span>
                        3
                    </span>
                    <p>
                        Apresente na porta
                        Seu ingresso chega por email e fica acessível no celular. Na entrada, é só mostrar o QR Code.
                    </p>
                </div>
            </div>

            <h2 style={{ color: "#823BBF" }}>Métodos de pagamento</h2>
            <div className="payment-methods">
                <ul>
                    <li>
                        <b>Multicaixa Express</b> - Pague direto pelo app Multicaixa Express em segundos. Sem sair de casa, sem banco.
                    </li>
                    <li>
                        <b>Referência Bancária</b> - Gere uma referência e pague no banco, ATM ou internet banking. No seu tempo.
                        Gere uma referência e pague no banco, ATM ou internet banking. No seu tempo.
                    </li>
                    <li>
                        <b>Cartão de Crédito Internacional</b> - Visa, Mastercard e demais bandeiras internacionais. Para quem está em qualquer lugar do mundo.
                    </li>
                </ul>
                
                <img src={new URL('../assets/payment-methods.png', import.meta.url).href} alt="Payment methods" />

                <p>
                    Pagamentos processados de forma segura pela <a href="https://paysgator.com" target="_blank">Paysgator.</a>
                </p>
            </div>
        </section>
    )
}

export default HowItWorks;