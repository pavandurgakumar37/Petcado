import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import sidelogo from "../../assets/images/logo.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";

function Home() {
  return (
    <section style={{margin:"20px"}}>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              

              <h1 className="heading-name">
                Introducing
                <strong className="main-name"> PETCADO</strong>
              </h1>
              <p style={{marginLeft : "47px"}}>A Pet Manager for Cats and Dogs</p>
              <p style={{marginLeft : "47px"}}> PETCADO is an online website  where information about different breeds of Cats <br/> and Dogs are provided.</p>
            </Col>
            
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={sidelogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;