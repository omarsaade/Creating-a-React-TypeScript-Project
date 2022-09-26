import React, { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

function NewTodo() {
  const todosCtx = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);
  //                               .MouseEvent
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
}

export default NewTodo;

// ===============

//             without useContext();
// import React, { useRef } from "react";
// import classes from "./NewTodo.module.css";

// type tProps = {
//   onAddTodo: (text: string) => void;
// };

// function NewTodo(props: tProps) {
//   //  mdn input type  HtMLButtonElement..         // starting value
//   // this error goes away because now we are creating a ref,
//   //   which will eventually be connected to an HTMLInputElement but which has
//   //   no initial value.
//   const todoTextInputRef = useRef<HTMLInputElement>(null);
//   //                               .MouseEvent
//   const submitHandler = (event: React.FormEvent) => {
//     event.preventDefault();
//     //  "?" he nhena hatina li2an barke mafi value,yaane barke nehna hatin hal sater
//     // barra el function...malah ya3ref typescript se3eta w he kerse
//     // --------------------
//     // you should only use this annotation "!"
//     //if you are 100% sure that this can't be null.
//     const enteredText = todoTextInputRef.current!.value;

//     if (enteredText.trim().length === 0) {
//       // throw an error;
//       return;
//     }

//     props.onAddTodo(enteredText);
//   };

//   return (
//     <form onSubmit={submitHandler} className={classes.form}>
//       <label htmlFor="text">Todo text</label>
//       <input type="text" id="text" ref={todoTextInputRef} />
//       <button>Add Todo</button>
//     </form>
//   );
// }

// export default NewTodo;
