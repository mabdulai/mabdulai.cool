import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';

import { Layout } from '../../components/common/';
import { folder1, folder2, folder3, centralPark } from '../../images/new-york';
import { Title, Subtitle, Gallery, Container, Spacer, Block } from '../../components/travel';

class NewYorkPage extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <Title>New York</Title>
          <Subtitle>So much walking</Subtitle>
          <Block title="">
            The Big Apple. After a pretty relaxing flight filled with sleep and onboard movies we arrived at JFK
            Airport. We stayed at the Wellington Hotel on 7th avenue close to Times Square. It felt like a perfect
            location for a tourist. Close to all the action and everything we wanted to see easily reachable. We visited
            Times Square multiple times just because it was so close to our hotel and we liked the atmosphere that it
            had. We also had plans to visit a Broadway show and that was just off Times Square.
          </Block>

          <Spacer />
          <LazyLoad>
            <Gallery items={folder1} />
          </LazyLoad>
          <Block title="Central Park is beautiful">
            You can not visit New York without having a walk through Central Park. What a beautiful contrast to the rest
            of the city. New York really feels like a city that never sleeps. With constant reminders of the large
            population filling the streets, subways and buildings. You can't go for five minutes without at least
            hearing a sirene, or the beeps of a cop car. But walking towards Central Park you already notice a big
            difference. Where normally the view of the sky is blocked by the immensely tall buildings of New York you
            suddenly start to see more and more the blue of the sky. You are greeted at the beginning of Central Park
            with the many horse carriages wanting to take you on a ride through the park. The city was in full
            preperations for the New York marathon at the time when we arrived. This was amazing because of all of the
            setup for the event around Central Park. We actually walked across the finish line of the marathon. From the
            park we made a quick detour to visit the Metropolitan Museum (The Met). Such a beautiful building.
          </Block>
          <Spacer />

          <LazyLoad>
            <Gallery items={centralPark} />
          </LazyLoad>
          <Block title="So much food">
            Our days were filled with walking around the city. Planning out a route and things we wanted to see and
            foods we wanted to eat in the morning and relaxing and eating some more food in the evenings. The city is
            just brimming with those classic american foods that every tourist wants to eat. From New York Pizza,
            donuts, hot dogs and all kinds of other tasty fast food to some more of the sweeter foods America has to
            offer. We needed to test out all of the candies we can not get in Holland and see if they live up to their
            reputations (Spoilers: they did).
          </Block>
          <Spacer />
          <Gallery items={folder2} />
          <Block title="Being the perfect tourist">
            There are of course certain spots you have to visit when you are in New York. We were there for a limited
            time so we had to make some choices of the places we really wanted to see and some things that we had or
            wanted to skip. After reading a lot of mediocre reviews we decided to skip the Statue of liberty. We did get
            a good view of it when we crossed the Brooklyn Bridge by foot. In the end we felt like we made a good
            choice. Some of the highlights of things we visited and saw were. Rockafeller building, Little Italy, China
            Town, Broadway and Brooklyn. But one of the most amazing things we did was being in America for Halloween
            👻. We went to the parade downtown and it was just a spectical. It was just like in the movies, big, well
            organised and just all around American Halloween. We had an amazing time!
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
