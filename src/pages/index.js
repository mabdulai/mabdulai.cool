import React from 'react';

import { Layout } from '../components/common/';
import Fade from 'react-reveal/Fade';
import newyork from '../images/home/newyork.jpg';
import hooks from '../images/home/hooks.jpg';
import hongkong from '../images/home/hongkong.jpg';

import { RowItemLeft, RowItemRight, Heading, DoubleRow } from '../components/home/';

const IndexPage = () => {
  return (
    <Layout>
      <Fade left>
        <Heading />
      </Fade>
      <Fade up>
        <RowItemLeft
          image={newyork}
          description="Travel - Photography"
          title="New York"
          subtitle="So much walking"
          link="/travel/new-york"
          buttonText="View Photos"
        />
      </Fade>
      <Fade up>
        <RowItemRight
          image={hooks}
          description="Learning - code"
          title="React Hooks"
          subtitle="My learnings into React Hooks"
          link="/code/hooks"
          buttonText="Subject Study"
        />
      </Fade>
      <Fade up>
        <RowItemLeft
          image={hongkong}
          description="Travel - Photography"
          title="Hong Kong"
          subtitle="A great vacation with friends"
          link="/travel/hong-kong"
          buttonText="View Photos"
        />
      </Fade>
      <Fade up>
        <DoubleRow />
      </Fade>
    </Layout>
  );
};

export default IndexPage;
