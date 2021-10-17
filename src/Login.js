import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import { useHistory } from "react-router-dom";
import { STOREUID, STOREUNAME, STOREUROLES } from "./Constants";

export default function Login(props) {
  const [loginForm, setLoginForm] = useState({
    user: "",
    pass: "",
  });
  const [errorResponse, setErrorResponse] = useState({
    msg: "",
    error: false,
  });
  const history = useHistory();

  useEffect(() => {
    document.body.style.backgroundColor = "#e9ecef";
  }, []);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setLoginForm((inputsValue) => {
      return { ...inputsValue, [name]: value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(props.apiGwUrl + "/auth/login", {
      method: "POST",
      body: JSON.stringify({
        user: loginForm.username,
        pass: loginForm.password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.result === "success") {
          setErrorResponse({
            msg: "",
            error: false,
          });

          sessionStorage.setItem(STOREUNAME, json.user.name);
          sessionStorage.setItem(STOREUROLES, json.user.roles);
          sessionStorage.setItem(STOREUID, json.user.id);

          history.push("/tasklist");
        } else {
          setErrorResponse({
            msg: json.message,
            error: true,
          });
        }
      })
      .catch((json) => {
        setErrorResponse({
          msg: "Something bad has happened...",
          error: true,
        });
      });
  }

  return (
    <div className="login">
      <div className="login-logo">
        <i className="bi bi-list-task" />
        <b> Task List</b>
      </div>
      <Card>
        <Card.Header className="login-msg">
          Sign in to start your session
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-2">
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <i className="bi bi-person-circle"></i>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                name="username"
                type="text"
                placeholder="Username"
                onChange={handleChange}
                isInvalid={errorResponse.error}
              />
              <Form.Control.Feedback type="invalid">
                {errorResponse.msg}
              </Form.Control.Feedback>
            </InputGroup>

            <InputGroup className="mb-2">
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <i className="bi bi-lock-fill"></i>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                name="password"
                type="password"
                onChange={handleChange}
                placeholder="Password"
                isInvalid={errorResponse.error}
              />
            </InputGroup>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
