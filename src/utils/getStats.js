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

export const initialStats = {
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

export const getBooks = (books) => {
  if (books === null) return ["Not reading any books at the moment", ""];
  return [books[0].name, books[0].author];
};

export const getGames = (games) => {
  if (games === null) return ["0", "Haven't been playing in a while"];
  return [games.owned_games, games.recently_played];
};
