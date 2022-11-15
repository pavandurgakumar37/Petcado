import React from "react";
import Card from "react-bootstrap/Card";
import { FaBeer } from 'react-icons/fa';  

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          PETCADO is an online website  where information about different breeds of Cats and Dogs are provided.
It provides different details like lifespan,their breeds,their food habits and basic useful information about pets. Our platform provides a link that redirects to the merchant , So that interested people can contact the seller and purchase the pets.

Our platform provides an clear view on how to manage and maintain the pets.It is a very friendly website for beginners.

          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;