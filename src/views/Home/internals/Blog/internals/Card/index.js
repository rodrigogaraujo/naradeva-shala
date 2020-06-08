import React from "react";

import { Container } from "./styles";

const Card = ({ img, title, description }) => {
  return (
    <Container>
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
    </Container>
  );
};
export default Card;
