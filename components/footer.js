class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {

        var Path = this.attributes.Path.value;

        this.innerHTML = `
        <link rel="stylesheet" type="text/css" href="${Path}css/footer.css">

        <footer class="main-footer">
        <div class="top-footer">
            <ul class="footer-list">
                <h1>FC Travels</h1>
                <a href="${Path}index.html">Início</a>
                <a href="${Path}serviços/index.html">Serviços</a>
                <a href="${Path}destinos/index.html">Destinos</a>
                <a href="${Path}duvidas/index.html">Dúvidas Frequentes</a>
                <a href="${Path}sobre/index.html">Sobre Nós</a>
            </ul>
            <ul class="footer-list">
                <h1>Horário de Atendimento</h1>
                <a>Segunda à Sexta</a>
                <a>09:00 - 17:00</a>
            </ul>
            <ul class="footer-list">
                <h1>Destinos</h1>
                <a href="${Path}destinos/brasil/index.html">Brasil</a>
                <a href="${Path}destinos/america-do-sul/index.html">América do Sul</a>
                <a href="${Path}destinos/america-central/index.html">América Central</a>
                <a href="${Path}destinos/america-do-norte/index.html">América do Norte</a>
                <a href="${Path}destinos/europa/index.html">Europa</a>
                <a href="${Path}destinos/africa/index.html">África</a>
                <a href="${Path}destinos/asia/index.html">Ásia</a>
                <a href="${Path}destinos/oriente-medio/index.html">Oriente Médio</a>
                <a href="${Path}destinos/oceania/index.html">Oceania</a>
            </ul>
            <ul class="footer-list">
                <h1>Serviços</h1>
                <a>Planejamento de Viagens</a>
                <a>Método SAM</a>
                <a>Visto Americano</a>
            </ul>
            <ul class="footer-list">
                <h1>Nossas Redes</h1>
                <a href="https://www.instagram.com/firstclass.travels/" target="_blank">Instagram</a>
                <a href="https://web.whatsapp.com/send?phone=555193649119" target="_blank">WhatsApp</a>
                <a>(51) 9364-9119</a>
                <a href="mailto:contatofctravels@gmail.com" target="_blank">Email</a>
            </ul>
        </div>
        <div class="botton-footer">
            <div class="botton-inner-footer">
                <img class="icon_footer" src="${Path}img/Header/Logo.png">
                <h2 class="footer_copyright">Copyright © 2023. First Class Travels Agência de Viagem. Todos os Direitos Reservados.</h2>
            </div>
        </div>
    </footer>
        `;
    }
}
customElements.define('footer-component', Footer);