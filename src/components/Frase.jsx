import { Card, Col, Row } from "react-bootstrap";

const Frase = ({personaje}) => {
  return (
    <Card>
      <Card.Body>
        <Row className="text-center bg-white p-3">
          <Col md={4}>
            <img
              src={personaje.image}
              alt={personaje.character}
            />
          </Col>
          <Col md={8}>
            <Card.Title>{personaje.character}</Card.Title>
            <Card.Text>
              {personaje.quote}
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Frase;
