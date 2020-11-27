import React, { useEffect, useState } from "react";
import Layout from "../components/common/Layout";
import { MainText } from "../style/shared-components";
import getStats from "../utils/getStats";
import styled from "styled-components";

// const initialStats = {
//   commits: 0,
//   tweets: 0,
//   games: {
//     owned_games: 0,
//     recently_played: "",
//   },
//   books: [
//     {
//       name: "",
//       author: "",
//     },
//   ],
// };

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
        of my <DataText>{stats.games.owned_games} Steam games</DataText>. The
        last one I played is <DataText>{stats.games.recently_played}</DataText>
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
