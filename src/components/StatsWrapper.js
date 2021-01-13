import React, { useEffect, useState } from "react";
import getStats, { initialStats } from "../utils/getStats";

const StatsWrapper = ({ children }) => {
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

export default StatsWrapper;
