import React, { useEffect, useState } from "react";
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

const Test = ({ children }) => {
  const [stats, setStats] = useState(initialStats);
  const [fetching, setFetching] = useState(false);
  useEffect(() => {
    setFetching(true);
    async function fetchStats() {
      const stats = await getStats();
      return stats;
    }
    try {
      fetchStats().then((s) => {
        setFetching(false);
        setStats(s);
      });
    } catch (error) {
      setFetching(false);
      console.log(error);
    }
  }, []);
  return (
    <div>{React.cloneElement(children, { children, stats, fetching })}</div>
  );
};

export default Test;
