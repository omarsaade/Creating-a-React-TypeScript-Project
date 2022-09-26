import Todo from "../models/todo";
import classes from "./TodoItem.module.css";

type AProps = {
  data: string;
  key: string;
  onRemoveTodo: () => void;
};

function todoItem(props: AProps) {
  return (
    <>
      <li onClick={props.onRemoveTodo} className={classes.item}>
        {props.data}
      </li>
    </>
  );
}

export default todoItem;

// ==
