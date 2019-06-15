import React, { Component } from 'react';
import { Layout } from '../components/common/';

import styled from 'styled-components';
import { Link } from 'gatsby';
import michael from '../images/about/michael.png';

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
  img {
    margin-left: -100px;
  }
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
  font-family: 'Modern Era';
  font-weight: 400;
  background: #ff6e6e;
  color: #fff;
  padding: 4px 8px;
  margin-top: 8px;
`;

const Block = styled.div`
  padding-top: 32px;
  max-width: 80ch;
`;

const BlockTitle = styled.h3`
  font-family: 'Gilroy';
  font-size: 18px;
  padding-bottom: 4px;
  font-weight: 400;
`;
const BlockText = styled.p``;

const StatBlock = styled.div`
  padding-bottom: 24px;
  font-family: 'Modern Era';

  li {
    list-style-type: none;
    padding: 3px 0;

    > strong {
      display: inline-block;
      min-width: 100px;
      font-weight: 500;
    }
  }

  > strong {
    background: #ff6e6e;
    color: #fff;
    padding: 4px 8px;
    font-weight: 500;
  }
`;

const Stats = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: auto;
  }
`;

const Social = styled.a`
  padding: 4px 8px;
  border: 1px solid #aee6e6;
  border-radius: 10px;
  transition: all 150ms ease-in-out;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    border: 1px solid #ff6e6e;
    cursor: pointer;
  }
`;

const Socials = styled.li``;

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
                <BlockTitle>The Developer</BlockTitle>
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
                <BlockTitle>The Designer</BlockTitle>
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
                <BlockTitle>Other Interests</BlockTitle>
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
                    <li>
                      <strong>Age:</strong> 28{' '}
                    </li>
                    <li>
                      <strong>Heritage:</strong> half Dutch, half Ghanian
                    </li>
                    <li>
                      <strong>Nickname:</strong> Mika
                    </li>
                    <Socials>
                      <strong>Elsewhere:</strong>{' '}
                      <Social href="http://www.twitter.com/mabdulai90" target="_blank">
                        Twitter
                      </Social>{' '}
                      <Social href="http://www.instagram.com/mabdulai90" target="_blank">
                        Instagram
                      </Social>{' '}
                      <Social href="http://www.github.com/mabdulai" target="_blank">
                        Github
                      </Social>
                    </Socials>
                  </ul>
                </StatBlock>
                <StatBlock>
                  <strong>Interests</strong>
                  <ul>
                    <li>
                      <strong>Coding</strong>
                    </li>
                    <li>
                      <strong>Design</strong>
                    </li>
                    <li>
                      <strong>Crossfit</strong>
                    </li>
                    <li>
                      <strong>Gaming</strong>
                    </li>
                    <li>
                      <strong>Lettering</strong>
                    </li>
                  </ul>
                </StatBlock>
                <StatBlock>
                  <strong>Gear</strong>
                  <ul>
                    <li>
                      <strong>Work:</strong> Mackbook Air
                    </li>
                    <li>
                      <strong>Home:</strong> Win - I7 7700K - 16GB DD3 - Nvidia GTX970
                    </li>
                    <li>
                      <strong>Gaming:</strong> Steam - Switch - PS4
                    </li>
                    <li>
                      <strong>Editor:</strong> VSCode
                    </li>
                    <li>
                      <strong>Phone:</strong> Samsung Galaxy S10 Plus
                    </li>
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
