class FullBanner extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {

        var Banner_Image1 = this.attributes.BImage1.value;
        var Banner_Image2 = this.attributes.BImage2.value;
        var Banner_Image3 = this.attributes.BImage3.value;
        var Banner_Icon = this.attributes.BIcon.value;
        var Banner_Title = this.attributes.BTitle.value;
        var Banner_Description = this.attributes.BDescription.value;
        var Path = this.attributes.Path.value;

        this.innerHTML = `
        <link rel="stylesheet" type="text/css" href="${Path}css/slideshow.css">
        <link rel="stylesheet" type="text/css" href="${Path}css/titles.css">    
        <link rel="stylesheet" type="text/css" href="${Path}css/background.css">

        <div class="background" id="background_image_full">
            <div class="slider">
                <div id="img1" class="slides" style="background-image: url('${Banner_Image1}');"></div>
                <div id="img2" class="slides" style="background-image: url('${Banner_Image2}');"></div>
                <div id="img3" class="slides" style="background-image: url('${Banner_Image3}');"></div>
            </div>
            <div class="main_info">
                <h1 class="main_title">${Banner_Title}</h1>
                <p class="main_description">${Banner_Description}</p>
                <img class="main_icon" src="${Banner_Icon}"></img>
            </div>
        </div>    
        `;
    }
}
customElements.define('full-banner-component', FullBanner);