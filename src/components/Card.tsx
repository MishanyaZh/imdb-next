import React from "react";
import { imageMainUrl } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";
import NotFound from "./NoPoster";

type Props = { result: any };

const Card = ({ result }: Props) => {
  const currentMoviePath = result.backdrop_path || result.poster_path;
  const movieTitle = result.title || result.name;

  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${result.id}`}>
        {currentMoviePath ? (
          <Image
            src={`${imageMainUrl}${currentMoviePath}`}
            alt="movie-image"
            width={500}
            height={300}
            className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
            priority={true}
          ></Image>
        ) : (
          <NotFound movieTitle={movieTitle} />
        )}
        <div className="p-2">
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <h2 className="text-lg font-bold truncate">{movieTitle}</h2>
          <p className="flex items-center">
            {result.release_date || result.first_air_date}
            <FiThumbsUp className="h-5 mr-1 ml-3" />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
