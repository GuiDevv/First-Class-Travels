class SingleBanner extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {

        var Banner_Image1 = this.attributes.BImage.value;
        var Banner_Title = this.attributes.BTitle.value;

        this.innerHTML = `
        <link rel="stylesheet" type="text/css" href="/css/slideshow.css">
        <link rel="stylesheet" type="text/css" href="/css/titles.css">    
        <link rel="stylesheet" type="text/css" href="/css/background.css">
      
        <div class="background" id="background_image">
            <div class="slider">
                <div id="single" class="slides" style="background-image: url('${Banner_Image1}');"></div>
            </div>
            <h1 class="main_title">${Banner_Title}</h1>
        </div>    
        `;
    }
}
customElements.define('single-banner-component', SingleBanner);