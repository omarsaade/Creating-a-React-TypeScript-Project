import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import React, { useContext } from "react";
import { TodosContext } from "../store/todos-context";

const Todos = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          data={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
// [{id:22 , text: "jdj"},{}]

// =========

// ================

// import Todo from "../models/todo";
// import TodoItem from "./TodoItem";
// import classes from "./Todos.module.css";

// // https://bobbyhadz.com/blog/typescript-declare-array-of-objects
// type AppProps = {
//   items: Todo[];
//   onRemoveTodo: (id: string) => void;
// };
// //            (items:AppProps)
// const Todos = (props: AppProps) => {
//   return (
//     <ul className={classes.todos}>
//       {props.items.map((item) => (
//         <TodoItem
//           key={item.id}
//           data={item.text}
//           onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
//         />
//       ))}
//     </ul>
//   );
// };

// export default Todos;
// // [{id:22 , text: "jdj"},{}]
