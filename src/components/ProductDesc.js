import React, { useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Robot from "../images/Cartoon_Robot.png";
import { Link } from "react-router-dom";
const { Configuration, OpenAIApi } = require("openai");

const ProductDesc = () => {
  const [robotResponse, setRobotResponse] = useState("");
  const productNameRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const configuration = new Configuration({
      apiKey: process.env.REACT_APP_OPENAI_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const response = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: `Generate an informative product description for the following product: ${productNameRef.current.value}`,
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    setRobotResponse(response.data.choices[0].text);
  };

  return (
    <div>
      <Container>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="mt-5 mb-3">
            <Form.Label>
              <h1>Tell our AI about your product</h1>
            </Form.Label>
            <Form.Control
              ref={productNameRef}
              type="text"
              name="productName"
              placeholder="Enter Product Name"
            />
            <Form.Text>Describe your product in detail</Form.Text>
          </Form.Group>

          <Button variant="primary" size="lg" type="submit">
            Generate Response
          </Button>
        </Form>
      </Container>

      <Card className="border-0 response-card">
        <Card.Body>
          <Card.Header>
            <h2>Response from GPT-3...</h2>
          </Card.Header>
          {robotResponse ? (
            <Card.Text>{robotResponse}</Card.Text>
          ) : (
            <Card.Img variant="bottom" src={Robot} />
          )}
        </Card.Body>
      </Card>
      <Link to="/">
        <Button variant="outline-danger" className="pad-bottom">
          Return Home
        </Button>
      </Link>
    </div>
  );
};

export default ProductDesc;
