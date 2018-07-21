import $ from 'jquery';

class Project {
  constructor() {
    this.itemIcon = $(".grid__item");
    this.itemContent = $(".project__content");
    this.gridContent = $(".grid__passage");
    this.events();
  }

  events() {
    this.itemIcon.hover(this.toggleTheMenu.bind(this));
    this.gridContent.hover(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu() {
    this.itemContent.toggleClass("project__content--is-visible");
    this.gridContent.toggleClass("grid__passage-is--visible");
  }
}

export default Project;
