import React from "react";
import "./App.css";
import TasksList from "./TasksList";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Menu from "./Menu";
import Login from "./Login";
import Welcome from "./Welcome";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

function App() {
  const apiGwUrl = process.env.REACT_APP_API_GW;

  return (
    <Routes>
      <Route
        path={"/"}
        element={
          <>
            <Menu apiGwUrl={apiGwUrl} />
            <Welcome />
          </>
        }
      />
      <Route
        path={"/tasklist"}
        element={
          <>
            <Menu apiGwUrl={apiGwUrl} />
            <PrivateRoute
              component={<TasksList apiGwUrl={apiGwUrl} />}
              requiredRoles={["SIMPLE", "ADMIN"]}
            />
          </>
        }
      />
      <Route path={"/login"} element={<Login apiGwUrl={apiGwUrl} />} />
    </Routes>
  );
}

export default App;
