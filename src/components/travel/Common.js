import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';
export const Spacer = styled.div`
  height: 100px;
`;

export const Gallery = styled(ImageGallery)`
  padding-top: 100px;
`;

export const Container = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  text-align: center;

  @media screen and (max-width: 800px) {
    padding: 0 30px;
    text-align: left;
  }
`;

export const Title = styled.h1`
  font-size: 80px;
  font-family: 'Gilroy';
  text-transform: uppercase;
  font-weight: 900;
  margin: 140px 0 0;

  @media screen and (max-width: 800px) {
    line-height: 80px;
  }
`;

export const Subtitle = styled.h2`
  display: inline-block;
  font-size: 28px;
  font-family: 'roboto mono';
  text-transform: uppercase;
  font-weight: 300;
  background: #000;
  color: #fff;
  padding: 8px 16px;
  margin: 40px 0 140px;

  @media screen and (max-width: 800px) {
    line-height: 40px;
    margin: 40px 0 40px;
  }
`;
