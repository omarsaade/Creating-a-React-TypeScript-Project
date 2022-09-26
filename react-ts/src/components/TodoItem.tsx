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

// import Todo from "../models/todo";
// import classes from "./TodoItem.module.css";

// type AProps = {
//   data: string;
//   key: string;
//   onRemove: (t: string) => void;
// };

// function todoItem(props: AProps) {
//   const removeItemHandler = (itemo: string) => {
//     props.onRemove(itemo);
//   };

//   return (
//     <>
//       <li
//         onClick={() => removeItemHandler(props.data)}
//         className={classes.item}
//       >
//         {props.data}
//       </li>
//     </>
//   );
// }

// export default todoItem;
