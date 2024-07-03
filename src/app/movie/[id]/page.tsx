import React from "react";
import Image from "next/image";
import { API_KEY, imageMainUrl, movieMainUrl } from "@/app/constants";
import NotFound from "@/components/NoPoster";

type Props = { params: { id: string } };

const MoviePage = async ({ params: { id } }: Props) => {
  const res = await fetch(`${movieMainUrl}${id}?api_key=${API_KEY}`);
  const movie = await res.json();

  const currentMoviePath = movie.backdrop_path || movie.poster_path;
  const movieTitle = movie.title || movie.name;
  const resourceNotFound = !movie.status && movie.status_message;

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
        {currentMoviePath ? (
          <Image
            src={`${imageMainUrl}${currentMoviePath}`}
            alt="movie-image"
            width={500}
            height={300}
            className="rounded-lg"
            style={{ maxWidth: "100%", height: "100%", width: "auto" }}
            priority={true}
          ></Image>
        ) : (
          <NotFound movieTitle={movieTitle} />
        )}
        {resourceNotFound && <NotFound resourceNotFound={resourceNotFound} />}
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">{movieTitle}</h2>
          <p className="text-lg mb-3">{movie.overview}</p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
