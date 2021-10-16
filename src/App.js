import React from "react";
import "./App.css";
import TasksList from "./TasksList";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Menu from "./Menu";

function App() {
  return (
    <>
      <Menu />
      <TasksList />
    </>
  );
}

export default App;
