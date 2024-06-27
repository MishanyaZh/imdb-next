import React from "react";
const API_KEY = process.env.API_KEY;
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Results from "@/components/Results";

type Props = { searchParams: Params };

const Home = async ({ searchParams }: Props) => {
  const genre = searchParams.genre || "fetchTrending";

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3${
        genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
      }?api_key=${API_KEY}&language=en-US&page=1`,
      { next: { revalidate: 10000 } }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }

    const text = await res.text();
    const data = JSON.parse(text);

    const results = data.results;

    return (
      <div>
        <Results results={results} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return (
      <div>
        <p>Error fetching data</p>
      </div>
    );
  }
};

export default Home;
