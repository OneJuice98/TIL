class ContentTitle {
  constructor($main, text) {
    this.$main = $main;
    this.text = text;
    this.render();
  }
  render() {
    /* SPA 구현을 위한 title 존재 유무 확인 => 제거 */
    const isTitle = this.$main.querySelector(".content_title");
    isTitle && this.$main.removeChild(isTitle);

    /* title tag 생성 */
    const container = document.createElement("div");
    container.className = "content_title";

    const title = document.createElement("h1");
    title.appendChild(document.createTextNode(this.text));

    /* render content title */
    container.appendChild(title);
    this.$main.appendChild(container);
  }
}
export default ContentTitle;
