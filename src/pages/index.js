import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import { Link } from 'gatsby';

const minHeight = '530px';
const maxHeight = '600px';

const Row = styled.div`
  position: relative;
  max-width: 1300px;
  margin: ${props => (props.right ? '0 auto 110px' : '0 auto 150px')};
`;

const MediaItemLeft = styled.div`
  position: relative;
  width: 85%;
  height: 70vh;
  min-height: ${minHeight};
  max-height: ${maxHeight};
`;

const MediaImageLeft = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: 50%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const ContentItemLeft = styled.div`
  background-color: #141424;
  height: 70vh;
  min-height: ${minHeight};
  max-height: ${maxHeight};
  width: 60%;
  margin-top: 100px;
  color: #fff;
`;

const MediaItemRight = styled.div`
  position: absolute;
  right: 0;
  top: 100px;
  width: 60%;
  height: 70vh;
  min-height: 530px;
  max-height: 600px;
  overflow: hidden;
`;

const MediaImageRight = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: 50%;
  height: 100%;
  right: 0;
  position: absolute;
  top: 100px;
  width: 100%;
`;

const ContentItemRight = styled.div`
  position: absolute;
  bottom: -100px;
  height: 100%;
  right: 0;
  width: calc(33.33% - 33.33px);
  z-index: 2;
  background-color: #fdd95f;
`;

const Description = styled.div`
  font-family: 'roboto mono';
`;
const Title = styled.div`
  font-size: 64px;
  padding-bottom: 8px;
`;

const Button = styled(Link)`
  min-width: 100%;
  border: 2px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  position: relative;
  transition: all 0.2s ease-out;

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
    z-index: -1;
    background-color: #fff;
  }
`;
const Content = styled.div`
  display: flex;
  width: ${props => (props.full ? '100%' : '50%')};
  flex: 1;
  height: 100%;
  padding: 40px;
  flex-direction: column;
  justify-content: space-between;
`;

const MainTitle = styled.h1`
  font-size: 80px;
  margin-top: 0;
  margin-bottom: 16px;
  max-width: 800px;
  transform: translateY(0) scale(1);
  transform-origin: left bottom;
`;

const SubTitle = styled.h2`
  font-size: 16px;
  font-family: Roboto\ Mono, monospace;
  font-weight: 300;
  line-height: 1.6;
  max-width: 500px;
`;

const PageHeading = styled.section`
  padding: 80px 0;
  width: 100%;
`;

const DoubleRow = styled.section`
  display: flex;
  position: relative;
  justify-content: space-between;
  max-width: 1300px;
  margin: ${props => (props.right ? '0 auto 110px' : '0 auto 150px')};
  height: 70vh;
  min-height: ${minHeight};
  max-height: ${maxHeight};
`;
const ItemLeft = styled.div``;
const ItemRight = styled.div`
  width: calc(33.333333333% - 33.333333333px);
  position: absolute;
  right: 0;
  top: 100px;
  height: 100%;
`;
const ItemLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(33.333333333% - 33.333333333px);
  position: absolute;
  height: 100%;
  z-index: 2;
  top: 100px;
  background: #eee;
  padding: 40px;
`;
const ItemLeftImage = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: 50%;
  position: absolute;
  left: 100px;
  height: 100%;
  width: calc(66.666666666% - 166.666666667px);
`;
const ItemRightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  z-index: 2;
  background: #eee;
  padding: 40px;
`;

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <PageHeading>
        <Row>
          <MainTitle>Michael Abdulai</MainTitle>
          <SubTitle>My personal playground for everything that sparks my creativity.</SubTitle>
        </Row>
      </PageHeading>
      <section>
        <Row right>
          <MediaItemLeft>
            <MediaImageLeft image={data.imageOne.childImageSharp.fluid.src} />
          </MediaItemLeft>
          <ContentItemRight>
            <Content full>
              <Description>Travel - Photography</Description>
              <div>
                <Title>New York</Title>
                <SubTitle>So much walking</SubTitle>
              </div>
              <Button to="/travel/new-york">View photos</Button>
            </Content>
          </ContentItemRight>
        </Row>
        <Row>
          <ContentItemLeft>
            <Content>
              <Description>Personal project - Code</Description>
              <div>
                <Title>React Hooks</Title>
                <SubTitle>My learnings into React Hooks</SubTitle>
              </div>
              <Button to="/code/hooks">Subject Study</Button>
            </Content>
          </ContentItemLeft>
          <MediaItemRight>
            <MediaImageRight image={data.imageTwo.childImageSharp.fluid.src} />
          </MediaItemRight>
        </Row>
        <Row>
          <MediaItemLeft>
            <MediaImageLeft image={data.imageOne.childImageSharp.fluid.src} />
          </MediaItemLeft>
          <ContentItemRight>
            <Content full>
              <Description>Travel - Photography</Description>
              <div>
                <Title>New York</Title>
                <SubTitle>So much walking</SubTitle>
              </div>
              <Button>View photos</Button>
            </Content>
          </ContentItemRight>
        </Row>
        <DoubleRow>
          <ItemLeft>
            <ItemLeftContent>
              <Description>Personal project - Code</Description>
              <div>
                <Title>Overstats</Title>
                <SubTitle>Getting the most out of your overwatch games</SubTitle>
              </div>
              <Button>View photos</Button>
            </ItemLeftContent>
            <ItemLeftImage image={data.imageThree.childImageSharp.fluid.src}>Image</ItemLeftImage>
          </ItemLeft>
          <ItemRight>
            <ItemRightContent>
              <Description>Personal project - Code</Description>
              <div>
                <Title>Overstats</Title>
                <SubTitle>Getting the most out of your overwatch games</SubTitle>
              </div>
              <Button>View photos</Button>
            </ItemRightContent>
          </ItemRight>
        </DoubleRow>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "1.jpg" }) {
      ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "2.jpg" }) {
      ...fluidImage
    }
    imageThree: file(relativePath: { eq: "3.jpg" }) {
      ...fluidImage
    }
  }
`;
