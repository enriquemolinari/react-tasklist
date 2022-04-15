import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, useNavigate } from "react-router-dom";
import User from "./User";
import PrivateRoute from "./PrivateRoute";

export default function Menu(props) {
  const userName = User.current().userName();
  const navigate = useNavigate();

  function handleLogout(e) {
    e.preventDefault();
    User.current(props.apiGwUrl)
      .logout()
      .then(() => navigate("/login"));
  }

  return (
    <Navbar bg="light" expand="sm">
      <Navbar.Brand href="#">
        <Link to="/">Understanding React</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">
            <PrivateRoute
              component={<Link to="/tasklist">Task List</Link>}
              requiredRoles={["SIMPLE", "ADMIN"]}
            ></PrivateRoute>
          </Nav.Link>
        </Nav>
        <Nav>
          {!userName && <Link to="/login">Sign in</Link>}
          {userName && (
            <a href="#task" onClick={handleLogout}>
              <i className="bi bi-person-circle"> {userName}</i> (Log out)
            </a>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
