import React, { Component } from 'react';
import Layout from '../../components/layout';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';
import LazyLoad from 'react-lazyload';
import { folder1, folder2, folder3, folder4 } from '../../images/hong-kong';

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
    line-height: 40px;
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
  font-size: 18px;
  padding-bottom: 4px;
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

class HongKongPage extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <Title>Hong Kong</Title>
          <Subtitle>Amazing time with friends and lots of food :)</Subtitle>
          <LazyLoad>
            <Gallery items={folder1} />
          </LazyLoad>
          <Block>
            <BlockTitle>Reuniting lovers</BlockTitle>
            <BlockText>
              In April of 2018 we visited Asia for the first time. We went on a trip with some of our close friends. One
              of our friends had a very good reason to want to go on this trip. His girlfriend had been staying in Hong
              Kong for work. He wanted to go visit her and we really wanted to go to Asia. It also meant that we had a
              place to stay in the crowded city of Hong Kong. This was especially a good deal because it can be pretty
              expensive city if you want to stay at a reasonable hotel. So this meant we had a bigger budget to spend on
              all the tasty foods Hong Kong had to offer. The reuniting of our two friends made the 11 hour flight all
              worth it.
            </BlockText>
          </Block>
          <Spacer />
          <LazyLoad>
            <Gallery items={folder2} />
          </LazyLoad>
          <Block>
            <BlockTitle>Exploring the city</BlockTitle>
            <BlockText>
              We were very fortunate to be guided around the city by someone who had been living their for about a year.
              This made the entire trip very effortless for us. From the small little things of where to buy the correct
              metro cards to knowing all the hot spots where to go and what places to avoid for being overrated tourist
              traps. Hong Kong is divided in two major parts. Kowloon and Hong Kong Island. Both have their own very
              distinct appeal. Hong Kong island felt modern and luxurious and Kowloon had a lot of traditional vibes.
              The views of the city skyline from The Victoria Harbor were very impressive. Seeing the traditional Junk
              boats against the city skyline was a beautiful contrast. We visited busy shopping centres by day (there
              were so many shopping centers) and went to the energetic party street of Lan Kwai Fong by night (well one
              night). We also visited the race tracks in a jam packed full stadium on a wednesday night. It attracted a
              wide assortment of expats and wealthy business men, watching them placing bets more than we made in a year
              was an interesting experience.
            </BlockText>
          </Block>
          <Spacer />
          <LazyLoad>
            <Gallery items={folder3} />
          </LazyLoad>
          <Block>
            <BlockTitle>Hiking on suicide cliff</BlockTitle>
            <BlockText>
              Besides all the impressive urban scenery we also went experienced a lot of traditional Hong Kong sights.
              We saw the Ten Thousand Buddhas Monastery, Hong Kong Zoological and Botanical Gardens and Hong Kong Big
              Buddah. But the best experiences we had to be the hikes we made. We started with a mild hike with a
              beautiful reward. Looking over some of the amazing beaches Hong Kong offers. But the real challenge came
              we hiked up to Suicide Cliff. This was one of the most extreme experiences I ever had. The hike had such
              steep climbs that the only way to traverse them were on hands and feet. At approximately 80% of the hike
              you reach Suicide Cliff. You need to follow a small path on the side of the mountain to reach a big
              hanging rock on the side of the mountain. Going across that small path was nerve wrecking. But the feeling
              of standing on top of Suicide Cliff and looking over the city was just an amazing experience.
            </BlockText>
          </Block>
          <Spacer />
          <LazyLoad>
            <Gallery items={folder4} />
          </LazyLoad>
        </Container>
      </Layout>
    );
  }
}

export default HongKongPage;
