import { Card, Col, Row } from "react-bootstrap";

const Frase = () => {
  return (
    <Card>
      <Card.Body>
        <Row className="text-center bg-white p-3">
          <Col md={4}>
            <img
              src="https://trello.com/1/cards/632a448eb47fe800d9bdef25/attachments/632cd86034034e0170124eec/previews/632cd86134034e0170124ef2/download/image.png"
              alt=""
            />
          </Col>
          <Col md={8}>
            <Card.Title>Homer Simpson</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              commodi aut neque deserunt ratione dignissimos molestiae pariatur
              iusto distinctio fugiat.
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Frase;
