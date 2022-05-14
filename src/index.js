import ReactDOM from "react-dom";
import App from "./Components/App/App.js";

Render();
export default function Render() {
  ReactDOM.render(<App />, document.querySelector(".root"));
}
