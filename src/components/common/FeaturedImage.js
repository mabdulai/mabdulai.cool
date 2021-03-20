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
  width: 80%;
  margin: 100px 0;
  img {
    width: 100%;
  }
`;
