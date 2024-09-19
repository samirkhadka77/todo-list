import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const [myTodos, setMyTodos] = useState([
    { id: 1, title: "Breakfast", desc: "Todo before 8am" },
    { id: 2, title: "Study", desc: "Todo before 8am" },
  ]);

  const addTodo = (todo) => {
    if (todo.id) {
      const updated = { ...todo, title: input };
      const newTodos = myTodos.filter((item, index) => item.id !== todo.id);
      setMyTodos([...newTodos, updated]);
      setInput("");
    } else {
      setMyTodos((prev) => [...prev, { id: 5, title: input }]);
      setInput("");
    }
  };

  const updateTodo = (todo) => {
    console.log("todo : ",todo)
    setInput(todo.title);
  };

  const deleteTodo = (todo) => {
    const newTodos = myTodos.filter((item, index) => item.id !== todo.id);
    setMyTodos(newTodos);
    setInput("");
  };

  return (
    <div style={{ height: "100vh", width: "100vw", padding: 0, margin: 0 }}>
      <div
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>My TODO List</h1>
      </div>

      <div
        style={{
          borderRadius: 5,
          padding: 5,
          display: "flex",
          alignItems: "center",
          gap: 5,
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>Save</button>
      </div>

      <h1>pawan</h1>
      <h1>samir</h1>

      <div style={{ width: "100%" }}>
        {myTodos.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                border: "1px solid gray",
                borderRadius: 5,
                display: "flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              <li style={{ width: "30%", textAlign: "left" }}>{item.title} </li>
              <button style={{ width: "30%" }} onClick={()=> updateTodo(item)}>
                Update
              </button>
              <button style={{ width: "30%" }} onClick={()=> deleteTodo(item)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
