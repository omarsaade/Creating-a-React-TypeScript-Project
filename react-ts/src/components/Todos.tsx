import { type } from "@testing-library/user-event/dist/type";
import React from "react";

//react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components/
/*
and we know that props in React will 
always be an object
with all the attributes we added 
on our own element here
*/
//          type defintion  FC : functional component
//const mab = <T>(val: T): T => val;

/*
type AppProps = {
  items: string[];
};
//            (items:AppProps)
const Todos = ({ items }: AppProps) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;

*/
// function Todos(props:{items:string[],children})  before using React.Fc
// el props hon fia el items wel children (props.children)
// so we use a Generic Type instead
//       React.FC   huwe  Generic  T Y P  E
const Todos: React.FC<{ items: string[] }> = (props) => {
  //jsx
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;

/*
But I'll come back to that a little bit later.
For the moment what we need to do here
is we need to make it clear
which kind of props we're getting here,
what the type of props in this function should be.
And of course, we can do this with a type assignment here.
And now we could actually say that props is an object type.
So we add those curly braces.
And again, that's not a value here,
that's a type definition.
It's an object type
and we know that props in React will always be an object
with all the attributes we added on our own element here
in App.tsx as key value pairs.
So here we could say

*/
