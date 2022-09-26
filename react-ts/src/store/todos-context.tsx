import React, { useState, ReactNode } from "react";
import Todo from "../models/todo";

type AppProps = {
  children?: React.ReactChild | React.ReactChild[];
};

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};
//
export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider = (props: AppProps) => {
  //named export
  // But TypeScript is not able to infer which types of values
  // should be accepted in that array eventually.
  const [todos, setTodos] = useState<Todo[]>([]);
  // const todos = [new Todo("Learn React"), new Todo("Learn TypeScripto")];
  // console.log(todos);  [{ id: 1.324 , text: "learn React" }, { id: 5.42, text: "learn React" }];

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
