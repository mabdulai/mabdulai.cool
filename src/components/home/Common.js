import styled from 'styled-components';
import { Link } from 'gatsby';

export const P = styled.p``;

export const Button = styled(Link)`
  min-width: 100%;
  border: 2px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  position: relative;
  transition: all 0.2s ease-out;
  font-family: 'Medium Era';
  &:hover {
    transform: translateY(2px);
    outline-width: 0;

    &:after {
      width: 98%;
      height: 4px;
    }
  }

  &:after {
    content: '';
    top: 100%;
    left: 50%;
    height: 5px;
    position: absolute;
    transform: translateX(-50%);
    transition: all 0.2s ease-out;
    width: 96%;
    z-index: 0;
    background-color: #fff;
  }
`;

export const Description = styled.div`
  font-family: 'Medium Era';
`;

export const Title = styled.div`
  font-size: 64px;
  padding-bottom: 8px;
  font-family: 'Gilroy';
  font-weight: 800;
  line-height: 56px;
`;

export const SubTitle = styled.h2`
  font-size: 18px;
  font-family: 'Medium Era', monospace;
  font-weight: 300;
  line-height: 1.6;
  max-width: 500px;
  padding-top: 8px;
`;

export const Content = styled.div`
  display: flex;
  width: ${props => (props.full ? '100%' : '50%')};
  flex: 1;
  height: 100%;
  padding: 48px;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    width: 100%;
    min-height: 380px;
    max-height: 380px;
  }
`;

export const Row = styled.div`
  position: relative;
  max-width: 1300px;
  margin: ${props => (props.right ? '0 auto 110px' : '0 auto 150px')};

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    margin: 0 auto 50px;
  }
`;
