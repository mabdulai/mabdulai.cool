import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import LazyLoad from 'react-lazyload';
import styled from 'styled-components';

import { Layout } from '../../components/common/';
import { folder1, folder2, folder3, folder4 } from '../../images/hong-kong';
import { Title, Subtitle, Gallery, Container, Spacer, Block } from '../../components/travel';
import { P } from '../../components/common';

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
          <Block title="Reuniting lovers">
            <P>
              In April of 2018 we visited Asia for the first time. We went on a trip with some of our close friends. One
              of our friends had a very good reason to want to go on this trip. His girlfriend had been staying in Hong
              Kong for work. He wanted to go visit her and we really wanted to go to Asia.
            </P>{' '}
            <P>
              This meant that we had a place to stay in the crowded city of Hong Kong. This was especially a good deal
              because it can be pretty expensive city if you want to stay at a reasonable hotel.
            </P>
            <P>
              So this meant we had a bigger budget to spend on all the tasty foods Hong Kong had to offer. The reuniting
              of our two friends made the 11 hour flight all worth it.
            </P>
          </Block>
          <Spacer />
          <LazyLoad>
            <Gallery items={folder2} />
          </LazyLoad>
          <Block title="Exploring the city">
            <P>
              We were very fortunate to be guided around the city by someone who had been living their for about a year.
              This made the entire trip very effortless for us.
            </P>{' '}
            <P>
              From the small little things of where to buy the correct metro cards to knowing all the hot spots where to
              go and what places to avoid for being overrated tourist traps. Hong Kong is divided in two major parts.
              Kowloon and Hong Kong Island. Both have their own very distinct appeal.
            </P>{' '}
            <P>
              Hong Kong island felt modern and luxurious and Kowloon had a lot of traditional vibes. The views of the
              city skyline from The Victoria Harbor were very impressive. Seeing the traditional Junk boats against the
              city skyline was a beautiful contrast.
            </P>{' '}
            <P>
              We visited busy shopping centres by day (there were so many shopping centers) and went to the energetic
              party street of Lan Kwai Fong by night (well one night). We also visited the race tracks in a jam packed
              full stadium on a wednesday night. It attracted a wide assortment of expats and wealthy business men,
              watching them placing bets more than we made in a year was an interesting experience.
            </P>
          </Block>
          <Spacer />
          <LazyLoad>
            <Gallery items={folder3} />
          </LazyLoad>
          <Block title="Hiking on suicide cliff">
            <P>
              Besides all the impressive urban scenery we also went experienced a lot of traditional Hong Kong sights.
              We saw the Ten Thousand Buddhas Monastery, Hong Kong Zoological and Botanical Gardens and Hong Kong Big
              Buddah.
            </P>
            <P>
              But the best experiences we had to be the hikes we made. We started with a mild hike with a beautiful
              reward. Looking over some of the amazing beaches Hong Kong has to offer.
            </P>
            <P>
              The real challenge came we hiked up to "Suicide Cliff". This was one of the most extreme experiences I
              ever had. The hike had such steep climbs that the only way to traverse them were on hands and feet.
            </P>
            <P>
              At approximately 80% of the hike you reach Suicide Cliff. You need to follow a small path on the side of
              the mountain to reach a big hanging rock on the side of the mountain. Going across that small path was
              nerve wrecking. But the feeling of standing on top of Suicide Cliff and looking over the city was just an
              amazing experience.
            </P>
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
