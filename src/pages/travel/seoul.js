import React, { Component } from 'react';
import Layout from '../../components/layout';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';
import LazyLoad from 'react-lazyload';
import { folder1, folder2, folder3 } from '../../images/seoul';

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

class SeoulPage extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <Title>Seoul</Title>
          <Subtitle>A short trip to such an exciting city</Subtitle>
          <Block>
            <BlockTitle>Welcome to Korea!</BlockTitle>
            <BlockText>
              After the impressive city that is Hong Kong we also went to Korea for a few days. Two of our friends have
              lived for a while in Korea so also there we had perfect guides to show us fun and interesting stuff. They
              taught us some the customs of the country and basic words to get by. We stayed in a AirBnB house that was
              just incredible. It was well taken care of and it really was a traditional Korean household. The district
              of Itaewon was filled with a lot of expats. This made it a very lively location during the night time. The
              best thing about Seoul though was the Korean BBQ. My god that's some good food. You should once in your
              lifetime visit Korea just for the Korean BBQ. Such an amazing experience.
            </BlockText>
          </Block>
          <Spacer />
          <LazyLoad>
            <Gallery items={folder1} />
          </LazyLoad>
          <Block>
            <BlockTitle>They love to party</BlockTitle>
            <BlockText>
              One thing that is for sure is that Korean people love a good party and food, it doesn't matter what day of
              the week it is. If it is night time you can definitely find your self all kinds of fun. We visited
              multiple bars and restaurants, even multiple restaurants in one evening. We especially fell in love with
              one bar, where we became good friends with the owner. He taught us some typical Korean drinking games and
              we returned there multiple nights. The hospitality of the Korean people was just inspiring to see. They
              really made you feel welcome.
            </BlockText>
          </Block>
          <Spacer />
          <LazyLoad>
            <Gallery items={folder2} />
          </LazyLoad>
          <Block>
            <BlockTitle>Nature & Hiking</BlockTitle>
            <BlockText>
              We also did a hike in Korea, after experiencing the two hikes in Hong Kong we wanted to see what Korea had
              to offer. We arrived at the foot of the hiking trail and were intrigued to see so many people taking the
              hiking in Korea very serious. People were dressed in professional hiking gear, had walking sticks for the
              climb and were dressed ready to go. We arrived in our touristy casual outfits and felt kind of
              underdressed. But that didn't stop us from reaching the top. The hike in korea was a long one but it felt
              properly structured. Clear paths were created and was well paced, until we reached the top. There you
              could go a bit higher but it required some proper climbing. Hanging on to support wires we made our way to
              the absolute top of the mountain. The winds up there were very intimidating but standing there felt like a
              major accomplishment.
            </BlockText>
          </Block>
          <Spacer />
          <LazyLoad>
            <Gallery items={folder3} />
          </LazyLoad>
          <Block>
            <BlockTitle>Beauty Product Heaven</BlockTitle>
            <BlockText>
              Just like in Hong Kong, Seoul had a lot of shopping to offer. Especially in the Beauty Product department.
              To much excitement of the misses. It was very interesting to see the level of dedication the people have
              over there for the beauty industry. You can tell that it's a part of their culture and that beauty is a
              big social status there.
            </BlockText>
          </Block>
        </Container>
      </Layout>
    );
  }
}

export default SeoulPage;
