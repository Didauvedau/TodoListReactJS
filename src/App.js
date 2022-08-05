import "./App.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import First from "./components/useState/First";
import Gift from "./components/useState/Gift";
import Bind from "./components/useState/Bind";
import TodoList from "./components/useState/TodoList";

function App() {
  return (
    <div className="App">
      <First></First>

      <Gift></Gift>
      <Bind></Bind>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
