import React from "react";
import Display from "./Display";
import Carousel from "react-bootstrap/Carousel";
import logo from "../images/openAI.jpeg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { cardData } from "../cardCaptions.js";

const Home = () => {
  return (
    <div>
        <Carousel interval={null}>
          <Carousel.Item>
            <img className="d-block w-100" src={logo} alt="Open AI" />
          </Carousel.Item>
          <Carousel.Caption>
            <h3 className="intro-caption">
              Use Our Artificial Intelligence API to Create Content For You
            </h3>
          </Carousel.Caption>
        </Carousel>
      <Container className="card-top">
        <Row>
          {cardData.map((card) => {
            return (
              <Col>
                <Display
                  title={card.title}
                  text={card.text}
                  program={card.program}
                  image={card.image}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
