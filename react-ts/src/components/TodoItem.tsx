import Todo from "../models/todo";

type AppProps = {
  data: string;
};

function todoItem(props: AppProps) {
  return (
    <>
      <li>{props.data}</li>
    </>
  );
}

export default todoItem;
