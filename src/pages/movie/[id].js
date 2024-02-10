import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
const MoviePage = () => {
  const [movie, setMovie] = useState({});
  const router = useRouter();
  const { id } = router.query;
  const yourAPIKEY = ''

  const urlImage = "https://image.tmdb.org/t/p/original";
  const fetchDetailMovie = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=yourAPIKEY`
      );
      const movie = await res.json();
      setMovie(movie);
      console.log(movie, "line 11 movie");
    } catch (error) {
      console.log(error);
      setMovie({});
    }
  };

  useEffect(() => {
    fetchDetailMovie();
  }, []);

  return (
    <div className="w-full ">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          width={500}
          height={300}
          placeholder="blur"
          blurDataURL="../../public/loading.svg"
          className="rounded-lg"
          src={`${urlImage}${movie.backdrop_path || movie.poster_path}`}
          alt="Movie is not avaiable"
          style={{
            maxWidh: "100%",
            height: "100%",
          }}
        />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg mb-3 ">
            <span className="font-semibold mr-1">Overview:</span>
            {movie.overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1 ">Date Released : </span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1 ">Rating: </span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
