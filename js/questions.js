function onQuestionClick(self) {
    console.log(self.children[0].children[1].style);
    if(self.children[1].style.display == "none" || self.children[1].style.display == ""){
        self.children[0].children[1].style.transform = "rotate(90deg)";
        self.children[1].style.display = "flex";
    }        
    else{
        self.children[0].children[1].style.transform = "rotate(0deg)";
        self.children[1].style.display = "none";
    }
        
}