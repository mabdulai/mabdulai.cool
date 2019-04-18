import React, { Component } from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';
import { Link } from 'gatsby';
import michael from '../images/michael.png';

const Container = styled.section`
  max-width: 1300px;
  margin: 0 auto;
`;

const ContentContainer = styled.div`
  display: flex;
`;

const Left = styled.div`
  width: 60%;
  padding-right: 120px;
`;
const Right = styled.div`
  width: 40%;
`;

const Title = styled.h1`
  font-size: 40px;
  font-family: 'Gilroy';
  text-transform: uppercase;
  font-weight: 900;
`;

const Subtitle = styled.h2`
  display: inline-block;
  font-size: 16px;
  font-family: 'roboto mono';
  text-transform: uppercase;
  font-weight: 300;
  background: #ff6e6e;
  color: #fff;
  padding: 4px 8px;
  margin-top: 8px;
`;

const Block = styled.p`
  padding-top: 32px;
  max-width: 100ch;
`;

const BlockTitle = styled.h3`
  font-family: 'Gilroy';
  font-size: 18px;
  padding-bottom: 4px;
  font-weight: 600;
`;
const BlockText = styled.p``;

const StatBlock = styled.div`
  padding-bottom: 24px;

  strong {
    background: #ff6e6e;
    color: #fff;
    font-weight: 300;
    padding: 4px 8px;
  }
`;

const Stats = styled.p`
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: auto;
  }
`;

const Social = styled.a`
  padding: 4px 8px;
  border: 2px solid #aee6e6;
  border-radius: 10px;
  transition: all 150ms ease-in-out;
  text-decoration: none;

  &:hover {
    border: 2px solid #ff6e6e;
    cursor: pointer;
  }
`;
class AboutsPage extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <ContentContainer>
            <Left>
              <Title>Hi, I'm Michael</Title>
              <Subtitle>Frontend Developer @ ABOSS </Subtitle>
              <Block>
                <BlockTitle>The developer</BlockTitle>
                <BlockText>
                  Learning new things is one of my favorite things in the world. Combine this with my love of design and
                  the web, and you have the perfect recipe for a developer in a field that is always developing at a
                  fast pace. Frontend has been the perfect cross section of all my interests and this is where I feel
                  most comfortable. Learning new techniques, technologies and fundamentals makes Frontend amazingly fun
                  and challenging for me. This website is a place where I can just have some fun and play around with
                  all the wonderful things that the Frontend / Design world has to offer.
                </BlockText>
              </Block>
              <Block>
                <BlockTitle>The designer</BlockTitle>
                <BlockText>
                  I started my work career in graphic design for the advertisement industry, before I have ever written
                  a single line of code. I knew I always wanted to create more interactive pieces while doing graphic
                  design. But I still have a passion for pretty stuff. This made Frontend an easy choice.
                </BlockText>
              </Block>
              <Block>
                <BlockTitle>Goals</BlockTitle>
                <BlockText>
                  With this website I want to express myself a bit more through different mediums, I want to write more,
                  design more and code more. Having a place to display all the thing I create will motivate me to always
                  improve and always keep creating. I also want to use this website to track the things I want to
                  accomplish for the rest of this year and the coming years. Find more about this here{' '}
                  <Link to="/goals">goals</Link>
                </BlockText>
              </Block>
              <Block>
                <BlockTitle>Other interests</BlockTitle>
                <BlockText>
                  Outside of the office and away from the keyboard I really enjoy sports. Recently I have started a
                  journey in CrossFit. Being active and balancing out a job where you spend most of your day behind a
                  computer screen is very important to me. I believe a healthy body will lead to a productive mind.
                </BlockText>
              </Block>
            </Left>
            <Right>
              <Stats>
                <img src={michael} alt="Michael Abdulai" />
                <StatBlock>
                  <strong>Details</strong>
                  <ul>
                    <li>age: 28 </li>
                    <li>heritage: half Dutch, half Ghanian</li>
                    <li>nickname: Mika</li>
                    <li>
                      elsewhere: <Social>Twitter</Social>, <Social>Instagram</Social>, <Social>GitHub</Social>
                    </li>
                  </ul>
                </StatBlock>
                <StatBlock>
                  <strong>Interests</strong>
                  <ul>
                    <li>coding</li>
                    <li>design</li>
                    <li>lettering</li>
                    <li>gaming</li>
                    <li>crossfit</li>
                    <li>reading</li>
                    <li>cooking</li>
                  </ul>
                </StatBlock>
                <StatBlock>
                  <strong>Gear</strong>
                  <ul>
                    <li>work: Mackbook Air</li>
                    <li>home: Win - I7 7700K - 16GB DD3 - Nvidia GTX970</li>
                    <li>gaming: steam - switch</li>
                    <li>editor: VSCode</li>
                    <li>phone: Samsung Galaxy S10 Plus</li>
                  </ul>
                </StatBlock>
              </Stats>
            </Right>
          </ContentContainer>
        </Container>
      </Layout>
    );
  }
}

export default AboutsPage;
