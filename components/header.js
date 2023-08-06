class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {

       this.innerHTML = `
      <link rel="stylesheet" type="text/css" href="/css/header.css">

      <header class="main-header">
            <div class="inner_header">
                <div class="icon_container" id="logo"><img src="/img/Header/Logo.png"></div>
                <div class="icon_container" id="menu"><img src="/img/Header/Tab.png" onclick="onMenuClick()"></div>
                <ul class="navigation" id="navigation_tab">
                    <a href="/index.html"><li>Início</li>
                    <a href="/serviços/index.html"><li>Serviços</li></a>
                    <a href="/destinos/index.html"><li>Destinos</li></a>
                    <a href="/sobre/index.html"><li>Sobre Nós</li></a>
                </ul>
            </div>
        </header>
        `;
    }
}
customElements.define('header-component', Header);