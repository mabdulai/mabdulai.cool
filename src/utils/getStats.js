const getStats = async () => {
  const query = `
      query Stats {
        commits
        tweets
        games {
          recently_played
          owned_games
        }
        books {
          name
          author
        }
      }
  `;

  try {
    const response = await fetch("https://mabdulai-stats.vercel.app/graphql", {
      method: "POST",
      body: JSON.stringify({ query }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    const { data } = await response.json();

    return data;
  } catch (error) {
    console.error(error.message ? error.message : error);
    return {};
  }
};

export default getStats;
