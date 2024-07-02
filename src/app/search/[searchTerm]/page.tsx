import React from "react";
import Results from "@/components/Results";
import { API_KEY, searchMainUrl } from "@/app/constants";

type Props = { params: { searchTerm: string } };

const SearchPage = async ({ params: { searchTerm } }: Props) => {
  const res = await fetch(
    `${searchMainUrl}?api_key=${API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`
  );
  const data = await res.json();

  const results = data.results;

  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}
      {results && <Results results={results} />}
    </div>
  );
};

export default SearchPage;
