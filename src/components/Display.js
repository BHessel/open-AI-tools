import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Display = (props) => {
  const { image, title, text, program } = props;

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} style={{height: "215px"}}/>
        <Card.Body style={{height: "180px"}}>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Link to={program}>
            <Button variant="primary">Start Here</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Display;
