import React, { useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Robot from "../images/Cartoon_Robot.png";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
const { Configuration, OpenAIApi } = require("openai");

const ProductDesc = () => {
  const [robotResponse, setRobotResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const productNameRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const configuration = new Configuration({
      organization: "org-mGmtet0AKojg6lMgNFlnQ8OU",
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
    setLoading(false);
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

          <Button variant="primary" size="lg" type="submit" disabled={loading}>
            Generate Response
          </Button>
        </Form>
      </Container>

      <Card className="border-0 response-card">
        <Card.Body>
          <Card.Header>
            <h2>Response from GPT-3...</h2>
          </Card.Header>
          {loading ? (
            <Spinner
              animation="border"
              variant="primary"
              className="spin-space"
            />
          ) : robotResponse ? (
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
