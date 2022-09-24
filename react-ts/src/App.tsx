import Todos from "./components/Todos";
import Todo from "./models/todo";
function App() {
  const todos = [new Todo("Learn React"), new Todo("Learn TypeScripto")];
  // console.log(todos);  [{ id: 1.324 , text: "learn React" }, { id: 5.42, text: "learn React" }];

  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
