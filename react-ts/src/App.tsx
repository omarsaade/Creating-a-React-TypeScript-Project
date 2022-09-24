import Todos from "./components/Todos";
import Todo from "./models/todo";
function App() {
  const todos = [new Todo("Learn React"), new Todo("Learn TypeScripto")];
  console.log(todos);

  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;

// (2) [Todo, Todo]

// Todo {id: '2022-09-24T20:19:00.538Z', text: 'Learn React'}
// Todo {id: '2022-09-24T20:19:00.538Z', text: 'Learn TypeScript'}
