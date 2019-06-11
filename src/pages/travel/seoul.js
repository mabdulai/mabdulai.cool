import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import { Layout } from '../../components/common/';
import { folder1, folder2, folder3 } from '../../images/seoul';
import { Title, Subtitle, Gallery, Container, Spacer, Block } from '../../components/travel';
import { P } from '../../components/common';

class SeoulPage extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <Title>Seoul</Title>
          <Subtitle>A short trip to such an exciting city</Subtitle>
          <Block title="Welcome to Korea!">
            <P>
              After the impressive city that is Hong Kong we also went to Korea for a few days. Two of our friends have
              lived for a while in Korea so also there we had perfect guides to show us fun and interesting stuff. They
              taught us some the customs of the country and basic words to get by.
            </P>{' '}
            <P>
              We stayed in a AirBnB house that was just incredible. It was well taken care of and it really was a
              traditional Korean household. The district of Itaewon was filled with a lot of expats. This made it a very
              lively location during the night time.
            </P>
            <P>
              The best thing about Seoul though was the Korean BBQ. My god that's some good food. You should once in
              your lifetime visit Korea just for the Korean BBQ. Such an amazing experience.
            </P>
          </Block>
          <Spacer />
          <LazyLoad>
            <Gallery items={folder1} />
          </LazyLoad>
          <Block title="They love to party">
            <P>
              One thing that is for sure is that Korean people love a good party and food, it doesn't matter what day of
              the week it is. If it is night time you can definitely find your self all kinds of fun.
            </P>
            <P>
              We visited multiple bars and restaurants, even multiple restaurants in one evening. We especially fell in
              love with one bar, where we became good friends with the owner. He taught us some typical Korean drinking
              games and we returned there multiple nights.
            </P>
            <P>The hospitality of the Korean people was just inspiring to see. They really made you feel welcome.</P>
          </Block>

          <Spacer />
          <LazyLoad>
            <Gallery items={folder2} />
          </LazyLoad>
          <Block title="Nature & Hiking">
            <P>
              We also did a hike in Korea, after experiencing the two hikes in Hong Kong we wanted to see what Korea had
              to offer. We arrived at the foot of the hiking trail and were intrigued to see so many people taking the
              hiking in Korea very serious. People were dressed in professional hiking gear, had walking sticks for the
              climb and were dressed ready to go.
            </P>{' '}
            <P>
              We arrived in our touristy casual outfits and felt kind of underdressed. But that didn't stop us from
              reaching the top. The hike in korea was a long one but it felt properly structured.
            </P>{' '}
            <P>
              Clear paths were created and was well paced, until we reached the top. There you could go a bit higher but
              it required some proper climbing. Hanging on to support wires we made our way to the absolute top of the
              mountain. The winds up there were very intimidating but standing there felt like a major accomplishment.
            </P>
          </Block>
          <Spacer />
          <LazyLoad>
            <Gallery items={folder3} />
          </LazyLoad>
          <Block title="Beauty Product Heaven">
            <P>
              Just like in Hong Kong, Seoul had a lot of shopping to offer. Especially in the Beauty Product department.
              To much excitement of the misses.
            </P>{' '}
            <P>
              It was very interesting to see the level of dedication the people have over there for the beauty industry.
              You can tell that it's a part of their culture and that beauty is a big social status there.
            </P>
          </Block>
        </Container>
      </Layout>
    );
  }
}

export default SeoulPage;
