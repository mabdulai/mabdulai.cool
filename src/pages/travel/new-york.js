import React, { Component } from 'react';
import Layout from '../../components/layout';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';
import LazyLoad from 'react-lazyload';
import { folder1, folder2, folder3, centralPark } from '../../images/new-york';
const Container = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  text-align: center;

  @media screen and (max-width: 800px) {
    padding: 0 30px;
    text-align: left;
  }
`;

const Title = styled.h1`
  font-size: 80px;
  font-family: 'Gilroy';
  text-transform: uppercase;
  font-weight: 900;
  margin: 140px 0 0;

  @media screen and (max-width: 800px) {
    padding: 0 20px;
    line-height: 80px;
  }
`;

const Subtitle = styled.h2`
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
    margin: 40px 0 40px;
  }
`;

const Block = styled.div`
  padding-top: 100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;

  @media screen and (max-width: 800px) {
    align-items: flex-start;
  }
`;

const BlockTitle = styled.h3`
  font-family: 'Gilroy';
  font-size: 32px;
  padding-bottom: 4px;
  text-transform: uppercase;
  @media screen and (max-width: 800px) {
    padding: 0 0 20px;
  }
`;

const BlockText = styled.p`
  font-family: 'roboto mono';
  font-size: 16px;
  max-width: 100ch;
`;

const Gallery = styled(ImageGallery)`
  padding-top: 100px;
`;

const Spacer = styled.div`
  height: 100px;
`;

class NewYorkPage extends Component {
  render() {
    console.log(folder1);

    return (
      <Layout>
        <Container>
          <Title>New York</Title>
          <Subtitle>So much walking</Subtitle>
          <Block>
            <BlockText>
              The Big Apple. After a pretty relaxing flight filled with sleep and onboard movies we arrived at JFK
              Airport. We stayed at the Wellington Hotel on 7th avenue close to Times Square. It felt like a perfect
              location for a tourist. Close to all the action and everything we wanted to see easily reachable. We
              visited Times Square multiple times just because it was so close to our hotel and we liked the atmosphere
              that it had. We also had plans to visit a Broadway show and that was just off Times Square.
            </BlockText>
          </Block>
          <Spacer />
          <LazyLoad>
            <Gallery items={folder1} />
          </LazyLoad>
          <Block>
            <BlockTitle>Central Park is beautiful</BlockTitle>
            <BlockText>
              You can not visit New York without having a walk through Central Park. What a beautiful contrast to the
              rest of the city. New York really feels like a city that never sleeps. With constant reminders of the
              large population filling the streets, subways and buildings. You can't go for five minutes without at
              least hearing a sirene, or the beeps of a cop car. But walking towards Central Park you already notice a
              big difference. Where normally the view of the sky is blocked by the immensely tall buildings of New York
              you suddenly start to see more and more the blue of the sky. You are greeted at the beginning of Central
              Park with the many horse carriages wanting to take you on a ride through the park. The city was in full
              preperations for the New York marathon at the time when we arrived. This was amazing because of all of the
              setup for the event around Central Park. We actually walked across the finish line of the marathon. From
              the park we made a quick detour to visit the Metropolitan Museum (The Met). Such a beautiful building.
            </BlockText>
          </Block>
          <Spacer />

          <LazyLoad>
            <Gallery items={centralPark} />
          </LazyLoad>
          <Block>
            <BlockTitle>So much food</BlockTitle>
            <BlockText>
              Our days were filled with walking around the city. Planning out a route and things we wanted to see and
              foods we wanted to eat in the morning and relaxing and eating some more food in the evenings. The city is
              just brimming with those classic american foods that every tourist wants to eat. From New York Pizza,
              donuts, hot dogs and all kinds of other tasty fast food to some more of the sweeter foods America has to
              offer. We needed to test out all of the candies we can not get in Holland and see if they live up to their
              reputations (Spoilers: they did).
            </BlockText>
          </Block>
          <Spacer />
          <Gallery items={folder2} />
          <Block>
            <BlockTitle>Being the perfect tourist</BlockTitle>
            <BlockText>
              There are of course certain spots you have to visit when you are in New York. We were there for a limited
              time so we had to make some choices of the places we really wanted to see and some things that we had or
              wanted to skip. After reading a lot of mediocre reviews we decided to skip the Statue of liberty. We did
              get a good view of it when we crossed the Brooklyn Bridge by foot. In the end we felt like we made a good
              choice. Some of the highlights of things we visited and saw were. Rockafeller building, Little Italy,
              China Town, Broadway and Brooklyn. But one of the most amazing things we did was being in America for
              Halloween 👻. We went to the parade downtown and it was just a spectical. It was just like in the movies,
              big, well organised and just all around American Halloween. We had an amazing time!
            </BlockText>
          </Block>
          <Spacer />

          <LazyLoad>
            <Gallery items={folder3} />
          </LazyLoad>
        </Container>
      </Layout>
    );
  }
}

export default NewYorkPage;
