import React, { Fragment } from "react";
import styled from "styled-components";
import { initialStats, getBooks, getGames } from "../utils/getStats";

import Layout from "../components/common/Layout";
import Loader from "../components/common/Loader";
import { MainText } from "../style/shared-components";

const Home = ({ path, stats = initialStats, fetching = true }) => {
  const [bookTitle, bookAuthor] = getBooks(stats.books);
  const [totalGames, lastPlayed] = getGames(stats.games);
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
          My name is is Michael Abdulai, and I create software using Javascript.{" "}
          Currently helping artists being in control of their data at ABOSS.
        </p>{" "}
        <br />
        <p>
          In the last 30 days, I’ve pushed{" "}
          <DataText>{stats.commits} commits</DataText> to GitHub and sent{" "}
          <DataText>{stats.tweets} tweets</DataText>.{" "}
          {bookAuthor.length > 0 ? (
            <span>
              I'm reading “<DataText>{bookTitle}</DataText>” at the moment by{" "}
              {stats.bookAuthor}.
            </span>
          ) : null}
          When I have some free time I like to play one of my{" "}
          <DataText>{totalGames} Steam games</DataText>.{" "}
          {lastPlayed && (
            <Fragment>
              The last one I played is <DataText>{lastPlayed}</DataText>
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
