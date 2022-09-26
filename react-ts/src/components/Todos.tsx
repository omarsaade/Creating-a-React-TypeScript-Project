import Todo from "../models/todo";
import TodoItem from "./TodoItem";

// https://bobbyhadz.com/blog/typescript-declare-array-of-objects
type AppProps = {
  items: Todo[];
};
//            (items:AppProps)
const Todos = (props: AppProps) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} data={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
// [{id:22 , text: "jdj"},{}]
