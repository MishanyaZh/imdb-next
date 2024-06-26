import React from "react";
const API_KEY = process.env.API_KEY;
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Results from "@/components/Results";

type Props = { searchParams: Params };

const Home = async ({ searchParams }: Props) => {
  const genre = searchParams.genre || "fetchTrending";

  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? `/movie/top_rated` : `trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const results = data.results;

  return (
    <div>
      <Results results={results} />
    </div>
  );
};

export default Home;
