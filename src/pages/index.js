import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import hooks from '../images/hooks.jpg';
import newyork from '../images/newyork.jpg';
import hongkong from '../images/hongkong.jpg';
import overwatch from '../images/overwatch.jpg';

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
  background-color: #eee;
`;

const Description = styled.div`
  font-family: 'roboto mono';
`;
const Title = styled.div`
  font-size: 64px;
  padding-bottom: 8px;
  font-family: 'Gilroy';
  font-weight: 800;
  line-height: 56px;
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
  font-family: 'roboto mono';
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

const ExternalButton = styled.a`
  min-width: 100%;
  border: 2px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  position: relative;
  transition: all 0.2s ease-out;
  font-family: 'roboto mono';
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
const Content = styled.div`
  display: flex;
  width: ${props => (props.full ? '100%' : '50%')};
  flex: 1;
  height: 100%;
  padding: 48px;
  flex-direction: column;
  justify-content: space-between;
`;

const MainTitle = styled.h1`
  font-size: 80px;
  margin-top: 0;
  margin-bottom: 32px;
  max-width: 800px;
  transform: translateY(0) scale(1);
  transform-origin: left bottom;
`;

const MainSubTitle = styled.h2`
  font-size: 16px;
  font-family: Roboto\ Mono, monospace;
  font-weight: 300;
  line-height: 1.6;
  background: #ff6e6e;
  color: #fff;
  padding: 4px 8px;
  display: inline-block;
`;

const SubTitle = styled.h2`
  font-size: 16px;
  font-family: Roboto\ Mono, monospace;
  font-weight: 300;
  line-height: 1.6;
  max-width: 500px;
`;

const PageHeading = styled.section`
  padding: 80px 0 0px;
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
  background: #141424;
  color: #fff;
  padding: 40px;
`;

const IndexPage = ({ data }) => {
  console.log(data);

  return (
    <Layout>
      <Fade left>
        <PageHeading>
          <Row>
            <MainTitle>Michael Abdulai</MainTitle>
            <MainSubTitle>My personal playground for everything that sparks my creativity.</MainSubTitle>
          </Row>
        </PageHeading>
      </Fade>
      <section>
        <Fade up>
          <Row>
            <MediaItemLeft>
              <MediaImageLeft image={newyork} />
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
        </Fade>
        <Fade up>
          <Row>
            <ContentItemLeft>
              <Content>
                <Description>Learning - Code</Description>
                <div>
                  <Title>React Hooks</Title>
                  <SubTitle>My learnings into React Hooks</SubTitle>
                </div>
                <Button to="/code/hooks">Subject Study</Button>
              </Content>
            </ContentItemLeft>
            <MediaItemRight>
              <MediaImageRight image={hooks} />
            </MediaItemRight>
          </Row>
        </Fade>
        <Fade up>
          <Row>
            <MediaItemLeft>
              <MediaImageLeft image={hongkong} />
            </MediaItemLeft>
            <ContentItemRight>
              <Content full>
                <Description>Travel - Photography</Description>
                <div>
                  <Title>Hong Kong</Title>
                  <SubTitle>A great vacation with friends</SubTitle>
                </div>
                <Button to="/travel/hong-kong">View photos</Button>
              </Content>
            </ContentItemRight>
          </Row>
        </Fade>
        <Fade up>
          <DoubleRow>
            <ItemLeft>
              <ItemLeftContent>
                <Description>Personal project - Code</Description>
                <div>
                  <Title>Overstats</Title>
                  <SubTitle>Getting the most out of your overwatch games</SubTitle>
                </div>
                <ExternalButton target="_blank" href="https://mabdulai.github.io/overstats/">
                  View project
                </ExternalButton>
              </ItemLeftContent>
              <ItemLeftImage image={overwatch} />
            </ItemLeft>
            <ItemRight>
              <ItemRightContent>
                <Description>Travel - Photography</Description>
                <div>
                  <Title>Seoul</Title>
                  <SubTitle>A short trip to such an exciting city</SubTitle>
                </div>
                <Button to="/travel/seoul">View photos</Button>
              </ItemRightContent>
            </ItemRight>
          </DoubleRow>
        </Fade>
      </section>
    </Layout>
  );
};

export default IndexPage;
