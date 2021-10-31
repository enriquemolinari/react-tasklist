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
            This application is just to desmostrate how to do auhtentication and
            authorization in React (or any SPA Application) in a <b>secure</b>{" "}
            way!
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
}
