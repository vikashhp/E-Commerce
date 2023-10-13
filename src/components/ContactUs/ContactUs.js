import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import Form from "react-bootstrap/Form";
import CardBody from "react-bootstrap/esm/CardBody";
import { useRef } from "react";

const ContactUs = () => {
  const userName = useRef();
  const userEmail = useRef();
  const userMobileNumber = useRef();

  const register = async (event) => {
    event.preventDefault();

    const data = [];
    const userData = {
      name: userName.current.value,
      email: userEmail.current.value,
      mobileNumber: userMobileNumber.current.value,
    };

    // console.log(userData);
    data.push(userData);

    const response = await fetch(
      "https://react-post-request-6ba75-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const main_data = await response.json();
    console.log(main_data);
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col xs={4}>
          <Card className="shadow-lg, m-5">
            <Card.Header style={{ backgroundColor: "orange" }}>
              <h2>Contact Us</h2>
            </Card.Header>
            <CardBody>
              <Form>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    className="mb-3"
                    type="text"
                    ref={userName}
                    placeholder="Enter Your Name"
                  />
                  <Form.Label> Email</Form.Label>
                  <Form.Control
                    className="mb-3"
                    type="email"
                    ref={userEmail}
                    placeholder="Enter Your Email"
                  />
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    className="mb-3"
                    type="number"
                    ref={userMobileNumber}
                    placeholder="Enter Your Mobile_Number"
                  />
                  <Button type="submit" onClick={register}>
                    Contact Us
                  </Button>
                </Form.Group>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
