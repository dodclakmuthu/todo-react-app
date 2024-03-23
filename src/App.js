import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  const todoItems = todos.map((todo) => (
    <Todo key={todo.id} id={todo.id} title={todo.title} deleteTodo={deleteTodo} />
  ));

  function addNewTodo() {
    if (todoInput !== "") {
      let newTodos = [...todos, { id: new Date().getTime(), title: todoInput }];
      setTodos(newTodos);
      setTodoInput("");
    }
  }

  function updateInput(e) {
    setTodoInput(e.target.value);
  }

  function deleteTodo(id){
    console.log(id)
    let newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className="main-content">
      <div className="new-todo-container">
        <input
          value={todoInput}
          onChange={(e) => updateInput(e)}
          type="text"
        ></input>
        <button onClick={() => addNewTodo()}>+</button>
      </div>
      <div className="todos-container">{todoItems}</div>
    </div>
  );
}

export default App;
