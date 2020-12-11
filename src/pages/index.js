import React, { Fragment } from "react";
import styled from "styled-components";

import Layout from "../components/common/Layout";
import { MainText } from "../style/shared-components";

const Home = ({ path, stats, fetching }) => {
  if (fetching) {
    return (
      <Layout path={path}>
        <Filler>
          <MainText>Loading</MainText>
        </Filler>
      </Layout>
    );
  }
  return (
    <Layout path={path}>
      <MainText>
        My name is is Michael Abdulai, and I create software using Javascript.{" "}
        Currently helping artists being in control of their data at ABOSS. In
        the last 30 days, I’ve pushed{" "}
        <DataText>{stats.commits} commits</DataText> to GitHub and sent{" "}
        <DataText>{stats.tweets} tweets</DataText>. I'm reading “
        <DataText>{stats.books[0].name}</DataText>” at the moment by{" "}
        {stats.books[0].author}. When I have some free time I like to play one
        of my <DataText>{stats.games?.owned_games} Steam games</DataText>.{" "}
        {stats.games?.recently_played.length && (
          <Fragment>
            The last one I played is{" "}
            <DataText>{stats.games?.recently_played}</DataText>
          </Fragment>
        )}
      </MainText>
    </Layout>
  );
};

export default Home;

const DataText = styled.span`
  color: ${({ theme }) => theme.ochre};
`;

const Filler = styled.div`
  min-height: 34vh;
`;
