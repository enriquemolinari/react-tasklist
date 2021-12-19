import Container from "react-bootstrap/Container";
import { useLocation } from "react-router-dom";
import Card from "react-bootstrap/Card";

export default function Welcome() {
  const location = useLocation();

  return (
    <Container fluid className="mainBody">
      <Card>
        <Card.Header as="h5">Welcome !</Card.Header>
        <Card.Body>
          <p>{location.state}</p>
          <p>
            Welcome to the Task List Application. This is to demonstrate how to
            do authentication and authorization in React (or any SPA
            Application) in a <b>secure</b> way!
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
}
