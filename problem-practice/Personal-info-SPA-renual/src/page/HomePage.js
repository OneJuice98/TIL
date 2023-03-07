import Card from "../components/Card.js";
import ContentTitle from "../components/ContentTitle.js";

class HomePage {
  constructor($main) {
    this.$main = $main;
    this.render();
  }
  render() {
    new ContentTitle(this.$main, "Great PeoPle");

    new Card(this.$main, window.localStorage.getItem("personalInfo"));
  }
}
export default HomePage;
