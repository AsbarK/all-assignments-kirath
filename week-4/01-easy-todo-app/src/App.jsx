import { useState, useCallback, useEffect } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  function deleteTodo(id) {
    fetch("http://localhost:3000/todos/" + id, {
      method: "DELETE",
    }).then(() => {
      fetch("http://localhost:3000/todos")
        .then((res) => res.json())
        .then((data) => setTodos(data));
    });
  }

  async function addTodo() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTodos([...todos, data]);
      });

    // setTodos([...todos, { title, description }]);
  }

  return (
    <>
      <div>
        <h1>Easy Todo App</h1>
        <input type="text" placeholder="title" id="title" />
        <input type="text" placeholder="description" id="description" />
        <button onClick={addTodo}>Add To-Do</button>
      </div>
      <table>
        <tbody>
          {todos.map((todo, index) => {
            console.log("Rendering todos:", todos);
            return (
              <Todo
                key={index}
                title={todo.title}
                description={todo.description}
                deleteTodo={() => deleteTodo(todo.id)}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}

function Todo(props) {
  return (
    <>
      <tr>
        <td>{props.title}</td>
        <td>{props.description}</td>
        <td>
          <button onClick={props.deleteTodo}>Delete To-Do</button>
        </td>
      </tr>
    </>
  );
}

export default App;
