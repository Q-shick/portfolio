import $ from 'jquery';

class Collapsible {
  constructor() {
    this.collapsible = $(".collapsible");
    this.events();
  }

  events() {
    for(var i = 0; i < this.collapsible.length; i++) {
      this.collapsible[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if(content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
  }
}

export default Collapsible;
