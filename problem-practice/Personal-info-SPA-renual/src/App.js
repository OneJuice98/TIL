import Header from "./components/header.js";
import HomePage from "./page/HomePage.js";
import { cardStatusInit, personInfoFetch } from "./Storage.js";

class App {
  constructor($app) {
    this.$app = $app;
    this.render();
  }
  async render() {
    /* main tag 생성 */
    const main = document.createElement("main");
    main.id = "page_content";

    /* init local storage */
    await personInfoFetch();
    cardStatusInit(JSON.parse(window.localStorage.getItem("personalInfo")));

    /* render header */
    new Header(this.$app, main);

    /* render main */
    this.$app.appendChild(main);

    /* render home (title & cards) */
    new HomePage(main);
  }
}
export default App;
