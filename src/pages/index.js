import React, { Fragment } from "react";
import styled from "styled-components";
import { initialStats } from "../utils/getStats";

import Layout from "../components/common/Layout";
import Loader from "../components/common/Loader";
import { MainText } from "../style/shared-components";

const Home = ({ path, stats = initialStats, fetching }) => {
  const books = stats.books[0];
  if (fetching) {
    return (
      <Layout path={path}>
        <Filler>
          <Loader />
        </Filler>
      </Layout>
    );
  }
  return (
    <Layout path={path}>
      <MainText>
        <p>
          My name is is Michael Abdulai, and I create fine user experiences with
          Javascript and React. Currently helping artists being in control of
          their data at ABOSS.
        </p>
        <p>
          In the last 30 days, I’ve pushed{" "}
          <DataText>{stats.commits} commits</DataText> to my personal GitHub
          account and sent <DataText>{stats.tweets} tweets</DataText>. I'm
          reading “<DataText>{books?.name}</DataText>” at the moment by{" "}
          <DataText>{stats.books[0].author}.</DataText> When I have some free
          time I like to play one of my{" "}
          <DataText>{stats.games?.owned_games} Steam games</DataText>.{" "}
          {stats.games?.recently_played.length && (
            <Fragment>
              The last one I played is{" "}
              <DataText>{stats.games?.recently_played}</DataText>.
            </Fragment>
          )}
        </p>
      </MainText>
    </Layout>
  );
};

export default Home;

const DataText = styled.span`
  color: ${({ theme }) => theme.ochre};
`;

const Filler = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
`;
