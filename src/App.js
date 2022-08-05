import "./App.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import First from "./components/useState/First";
import Gift from "./components/useState/Gift";
import Bind from "./components/useState/Bind";
import TodoList from "./components/useState/TodoList";
import Content from "./components/useEffect/Content";
import Toggle from "./components/useEffect/Toggle";
import CountUseRef from "./components/useRef/CountUseRef";

function App() {
  return (
    <div className="App">
      {/* <First></First>

      <Gift></Gift>
      <Bind></Bind>
      <TodoList></TodoList> */}
      {/* <Toggle></Toggle> */}
      <CountUseRef></CountUseRef>
    </div>
  );
}

export default App;
