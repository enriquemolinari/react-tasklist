import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, useHistory } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import { STOREUNAME } from "./Constants";

export default function Menu() {
  const username = sessionStorage.getItem(STOREUNAME);
  const history = useHistory();

  function handleLogout() {
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
        <NavDropdown
          title={
            username ? (
              <i className="bi bi-person-circle"> {username}</i>
            ) : (
              "Guest"
            )
          }
          id="basic-nav-dropdown"
        >
          <NavDropdown.Item>
            {!username && <Link to="/login">Sign in</Link>}
            {username && (
              <a href="#" onClick={handleLogout}>
                Log out
              </a>
            )}
          </NavDropdown.Item>
        </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
  );
}
