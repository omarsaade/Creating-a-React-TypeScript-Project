import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import Todo from "../models/todo";

// https://bobbyhadz.com/blog/typescript-declare-array-of-objects
type AppProps = {
  items: Todo[];
};
//            (items:AppProps)
const Todos = (props: AppProps) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
