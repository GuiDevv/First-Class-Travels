class Banner extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {

        var Banner_Image1 = this.attributes.BImage1.value;
        var Banner_Image2 = this.attributes.BImage2.value;
        var Banner_Image3 = this.attributes.BImage3.value;
        var Banner_Title = this.attributes.BTitle.value;
        var Path = this.attributes.Path.value;

        this.innerHTML = `
        <link rel="stylesheet" type="text/css" href="${Path}css/slideshow.css">
        <link rel="stylesheet" type="text/css" href="${Path}css/titles.css">    
        <link rel="stylesheet" type="text/css" href="${Path}css/background.css">

        <div class="background" id="background_image">
            <div class="slider">
                <div id="img1" class="slides" style="background-image: url('${Banner_Image1}');"></div>
                <div id="img2" class="slides" style="background-image: url('${Banner_Image2}');"></div>
                <div id="img3" class="slides" style="background-image: url('${Banner_Image3}');"></div>
            </div>
            <h1 class="main_title">${Banner_Title}</h1>
        </div>    
        `;
    }
}
customElements.define('banner-component', Banner);