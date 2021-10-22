import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";
import { useEffect, useState } from "react";
import { STOREUID } from "./Constants";

export default function TasksList(props) {
  const [tasks, setTasks] = useState({ tasks: [] });
  let userId = sessionStorage.getItem(STOREUID);
  let status = {
    DANGER: "danger",
    WARNING: "warning",
    FINE: "primary",
    FUTURE: "secondary",
  };

  //if (!userId) return;

  useEffect(() => {
    fetch(props.apiGwUrl + "/app/tasks?idCreator=" + userId)
      .then((response) => response.json())
      .then((json) => {
        setTasks(json);
      });
  }, []);

  return (
    <Container fluid className="mainBody">
      <Card>
        <Card.Header as="h5">
          <i className="bi bi-list-task" /> Task List
        </Card.Header>
        <Card.Body>
          {tasks.tasks.map((t, index) => (
            <ListGroup variant="flush">
              <ListGroup.Item className="border-top">
                <Form.Check type="checkbox" inline={true} />
                {t.text}
                <Badge variant={status[t.status]}>
                  <i className="bi bi-clock"></i> {t.expirationDate}
                </Badge>
              </ListGroup.Item>
            </ListGroup>
          ))}
        </Card.Body>
        <Card.Footer className="text-muted">
          <Button variant="primary float-right">
            <i className="bi bi-plus-lg" />
            Add Task
          </Button>
        </Card.Footer>
      </Card>
    </Container>
  );
}
