import React from "react";

type Props = {
  movieTitle?: string;
  resourceNotFound?: string;
};

const NotFound = ({ movieTitle, resourceNotFound }: Props) => {
  return (
    <div className="text-orange-200 p-3 m-1 flex items-center border rounded-lg border-solid border-orange-200">
      {resourceNotFound
        ? resourceNotFound
        : `the movie ${movieTitle ? `"${movieTitle}"` : ""} has no poster!`}
    </div>
  );
};

export default NotFound;
