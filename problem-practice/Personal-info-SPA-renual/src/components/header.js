import ContentTitle from "./ContentTitle.js";

class Header {
  constructor($app, $main) {
    this.$app = $app;
    this.$main = $main;
    this.render();
  }

  menuClicked(menu, title) {
    window.history.pushState("", "", `/${menu}`);
    new ContentTitle(this.$main, title);
  }

  /**
   * GNB에 메뉴로 tag 생성 과 기능 구현을 담당
   * @param {*} location GNB에서의 만들고자 하는 메뉴의 위치
   * @param {*} id 해당 tag의 id를 정의 -> "menu_{id}"
   * @param {*} text 메뉴에서의 보여질 Text 입력
   * @returns span tag
   */
  createMenu(location, id, text) {
    /* header child node 구성 */
    const div = document.createElement("div");
    div.className = `header header_${location}`;

    const span = document.createElement("span");
    span.className = "menu_name";
    span.id = `menu_${id}`;
    span.appendChild(document.createTextNode(text));

    /* 기능 : Menu Click Event, history 이용 SPA 구현 */
    span.addEventListener("click", () => {
      id === "home"
        ? this.menuClicked("", "Great PeoPle")
        : this.menuClicked(`${id}`, "Sign Up, GreatPeoPle!");
    });

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
