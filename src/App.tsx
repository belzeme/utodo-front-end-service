import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import { api } from "./api/todos";
import ToDoListView from "./views/todos.view/TodoListView";

function App() {
  const [isConnected, setIsConnected] = useState(false);

  const pingService = async () => {
    const isAvailable = await api.ping()();
    setIsConnected(isAvailable);
  };

  const checkTodoApisConnection = () => {
    pingService();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button variant="contained" onClick={checkTodoApisConnection}>
          Check for backend connection
        </Button>
        <p>
          <span>isConnected:</span>
          <span>{isConnected ? "yes" : "no"}</span>
        </p>
        <ToDoListView />
      </header>
    </div>
  );
}

export default App;
