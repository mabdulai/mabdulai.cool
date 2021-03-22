import React from "react";
import styled from "styled-components";

const FeaturedImage = ({ src }) => {
  return (
    <Container>
      <img src={src} />
    </Container>
  );
};

export default FeaturedImage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 100px auto;
  img {
    width: 70%;
    @media (max-width: 1200px) {
      display: none;
    }
  }
`;
