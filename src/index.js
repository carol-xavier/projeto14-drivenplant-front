import ReactDOM from "react-dom";
import App from "./Components/App";

Render();
export default function Render() {
  ReactDOM.render(<App />, document.querySelector(".root"));
}
