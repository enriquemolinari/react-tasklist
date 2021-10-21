import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";

export default function TasksList(props) {
  return (
    <Container fluid className="mainBody">
      <Card>
        <Card.Header as="h5">
          <i className="bi bi-list-task" /> Task List
        </Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item className="border-top">
              <Form.Check type="checkbox" inline={true} />
              Cras justo odio
              <Badge variant="primary">
                <i className="bi bi-clock"></i> Primary
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item>
              <Form.Check type="checkbox" inline={true} />
              Dapibus ac facilisis in
            </ListGroup.Item>
            <ListGroup.Item>
              <Form.Check type="checkbox" inline={true} />
              Morbi leo risus
            </ListGroup.Item>
            <ListGroup.Item>
              <Form.Check type="checkbox" inline={true} />
              Porta ac consectetur ac
            </ListGroup.Item>
          </ListGroup>
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
