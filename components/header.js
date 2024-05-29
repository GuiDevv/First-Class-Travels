class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {

        var Path = this.attributes.Path.value;

       this.innerHTML = `
      <link rel="stylesheet" type="text/css" href="${Path}css/header.css">

      <header class="main-header">
            <div class="inner_header">
                <div class="icon_container" id="logo"><img src="${Path}img/Header/Logo.png"></div>
                <div class="icon_container" id="menu"><img src="${Path}img/Header/Tab.png" onclick="onMenuClick()"></div>
                <ul class="navigation" id="navigation_tab">
                    <a href="${Path}"><li>Início</li>
                    <a href="${Path}serviços/"><li>Serviços</li></a>
                    <a href="${Path}destinos/"><li>Destinos</li></a>
                    <a href="${Path}sobre/"><li>Sobre Nós</li></a>
                </ul>
            </div>
        </header>
        `;
    }
}
customElements.define('header-component', Header);