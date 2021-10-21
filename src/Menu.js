import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, useHistory } from "react-router-dom";
import { STOREUNAME } from "./Constants";

export default function Menu() {
  const username = sessionStorage.getItem(STOREUNAME);
  const history = useHistory();

  function handleLogout(e) {
    e.preventDefault();
    sessionStorage.clear();
    history.push("/login");
  }

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">
        <Link to="/">Understanding React</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">
            <Link to="/tasklist">Task List</Link>
          </Nav.Link>
        </Nav>
        <Nav>
          {!username && <Link to="/login">Sign in</Link>}
          {username && (
            <a href="#" onClick={handleLogout}>
              <i className="bi bi-person-circle"> {username}</i> (Log out)
            </a>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
