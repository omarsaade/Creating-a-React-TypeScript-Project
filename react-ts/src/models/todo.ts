// we can create a type or an interface instead of creating
// class ..but yallahhh
// im not creating a component
// https://www.typescriptlang.org/docs/handbook/classes.html
class Todo {
  // when using TypeScript,
  //you also have to define those properties ahead of time
  //to make it clear which types of values
  //will be stored in there.
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = `${Math.random()}`;

    // this.id = new Date().toISOString();
  }
}

export default Todo;
