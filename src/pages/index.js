import React, { useEffect, useState } from "react";
import Layout from "../components/common/Layout";
import { MainText } from "../style/shared-components";
import getStats from "../utils/getStats";

const initialStats = {
  commits: 0,
  tweets: 0,
  games: {
    owned_games: 0,
    recently_played: "",
  },
  books: [
    {
      name: "",
      author: "",
    },
  ],
};

const Home = ({ path }) => {
  const [stats, setStats] = useState(initialStats);
  useEffect(() => {
    async function fetchStats() {
      const stats = await getStats();
      return stats;
    }
    try {
      fetchStats().then((s) => setStats(s));
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <Layout path={path}>
      <MainText>
        <strong>
          My name is is Michael Abdulai, and I create software using Javascript.
        </strong>{" "}
        Currently helping artists being in control of their data at ABOSS. In
        the last 30 days, I’ve pushed {stats.commits} commits to GitHub and sent{" "}
        {stats.tweets} tweets. I'm reading “{stats.books[0].name}” at the moment
        by {stats.books[0].autor}. When I have some free time I like to play one
        of my {stats.games.owned_games} Steam games. The last one I played is{" "}
        {stats.games.recently_played}
      </MainText>
    </Layout>
  );
};

export default Home;
