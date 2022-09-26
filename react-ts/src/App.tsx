import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosContextProvider from "./store/todos-context";
function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;

// ==============

// import React, { useState } from "react";
// import NewTodo from "./components/NewTodo";
// import Todos from "./components/Todos";
// import Todo from "./models/todo";

// function App() {
//   // But TypeScript is not able to infer which types of values
//   // should be accepted in that array eventually.
//   const [todos, setTodos] = useState<Todo[]>([]);
//   // const todos = [new Todo("Learn React"), new Todo("Learn TypeScripto")];
//   // console.log(todos);  [{ id: 1.324 , text: "learn React" }, { id: 5.42, text: "learn React" }];

//   const addTodoHandler = (todoText: string) => {
//     const newTodo = new Todo(todoText);
//     setTodos((prevTodos) => {
//       return prevTodos.concat(newTodo);
//     });
//   };

//   const removeTodoHandler = (todoId: string) => {
//     setTodos((prevTodos) => {
//       return prevTodos.filter((todo) => todo.id !== todoId);
//     });
//   };

//   return (
//     <div>
//       <NewTodo onAddTodo={addTodoHandler} />
//       <Todos items={todos} onRemoveTodo={removeTodoHandler} />
//     </div>
//   );
// }

// export default App;
