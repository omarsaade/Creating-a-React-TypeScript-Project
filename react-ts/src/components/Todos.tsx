import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

// https://bobbyhadz.com/blog/typescript-declare-array-of-objects
type AppProps = {
  items: Todo[];
  onRemoveTodo: (id: string) => void;
};
//            (items:AppProps)
const Todos = (props: AppProps) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          data={item.text}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
// [{id:22 , text: "jdj"},{}]

// ===============================

// import Todo from "../models/todo";
// import TodoItem from "./TodoItem";
// import classes from "./Todos.module.css";

// // https://bobbyhadz.com/blog/typescript-declare-array-of-objects
// type AppProps = {
//   items: Todo[];
//   onDelete: (text: string) => void;
// };
// //            (items:AppProps)
// const Todos = (props: AppProps) => {
//   const removeItem = (t: string) => {
//     props.onDelete(t);
//   };

//   return (
//     <ul className={classes.todos}>
//       {props.items.map((item) => (
//         <TodoItem key={item.id} data={item.text} onRemove={removeItem} />
//       ))}
//     </ul>
//   );
// };

// export default Todos;
// // [{id:22 , text: "jdj"},{}]
