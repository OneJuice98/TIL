import Header from "./components/header.js";

class App {
  constructor($app) {
    this.$app = $app;
    this.render();
  }
  render() {
    new Header(this.$app);
  }
}
export default App;
