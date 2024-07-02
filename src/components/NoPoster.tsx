import React from "react";

type Props = {
  movieTitle: string;
};

const NoPoster = ({ movieTitle }: Props) => {
  return (
    <div className="text-orange-200 p-3 m-1 text-center border rounded-lg border-solid border-orange-200">
      {`the movie "${movieTitle}" has no poster!`}
    </div>
  );
};

export default NoPoster;
