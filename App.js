import logo from "./logo.svg";
import "./App.css";
import Counter from "./hooks.jsx";
import Todo from "./todo.jsx";
import { TodoItems3 } from "./store.jsx";
import ButtonContainer from "./calculator.jsx";


function App() {
const defaultTodoItems  = [{Todo}];

  return (
    <TodoItems3.Provider value={["ragi"]}>
      <div>
        <Todo />

      </div>
    </TodoItems3.Provider>
  );
}
export default App;
