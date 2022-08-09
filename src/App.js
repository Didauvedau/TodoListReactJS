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
import Parent from "./components/useMemo/Parent";
import ReducerParent from "./components/useReducer/ReducerParent";
import TodoReducer from "./components/useReducer/TodoReducer";
import ContentVideo from "./components/useImperativeHandle/ContentVideo";

// import Count from "./components/memo/Count";
import Count from "./components/useCallback/Count";

function App() {
  return (
    <div className="App">
      <First></First>
      <Gift></Gift>
      <Bind></Bind>
      <TodoList></TodoList>
      <Toggle></Toggle>
      <CountUseRef></CountUseRef>
      <Count></Count>
      <Count></Count>
      <Parent></Parent>
      <ReducerParent></ReducerParent>
      <TodoReducer></TodoReducer>
      <ContentVideo></ContentVideo>
    </div>
  );
}

export default App;
