import React from "react";
import "./App.css";
import TasksList from "./TasksList";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Menu from "./Menu";
import Login from "./Login";
import Welcome from "./Welcome";
import { Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

function App() {
  const apiGwUrl = process.env.REACT_APP_API_GW;

  return (
    <>
      <Route exact path={"/"}>
        <Menu apiGwUrl={apiGwUrl} />
        <Welcome />
      </Route>
      <Route exact path={"/tasklist"}>
        <Menu apiGwUrl={apiGwUrl} />
        <PrivateRoute
          component={<TasksList apiGwUrl={apiGwUrl} />}
          requiredRoles={["SIMPLE", "ADMIN"]}
        />
      </Route>
      <Route exact path={"/login"}>
        <Login apiGwUrl={apiGwUrl} />
      </Route>
    </>
  );
}

export default App;
