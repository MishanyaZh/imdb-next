import React from "react";

type Props = { results: any[] };

const Results = ({ results }: Props) => {
  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>{result.original_title}</div>
      ))}
    </div>
  );
};

export default Results;
