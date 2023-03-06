class Header {
  constructor($app) {
    this.$app = $app;
    this.render();
  }

  createMenu(location, id, text) {
    const div = document.createElement("div");
    div.className = `header header_${location}`;

    const span = document.createElement("span");
    span.className = "menu_name";
    span.id = `menu_${id}`;
    span.appendChild(document.createTextNode(text));

    div.appendChild(span);
    return div;
  }

  render() {
    const header = document.createElement("header");

    const leftMenu = this.createMenu("left", "home", "HOME");
    const rightMenu = this.createMenu("right", "signup", "SIGNUP");

    header.appendChild(leftMenu);
    header.appendChild(rightMenu);
    this.$app.appendChild(header);
  }
}
export default Header;
