import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/Fi";

const CardMovies = (props) => {
  const { data } = props;
  console.log(data, "line 5");
  const urlImage = "https://image.tmdb.org/t/p/original";
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {data &&
        data.map((item) => (
          <div
            className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm: shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200"
            key={item.id}
          >
            <Link href={{pathname :`/movie/${item.id}`, query:item.id }}>
              <Image
                width={500}
                height={300}
                placeholder="blur"
                blurDataURL="../../public/loading.svg"
                className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
                src={`${urlImage}${item.backdrop_path || item.poster_path}`}
                alt="image is not avaiable"
                style={{
                  maxWidh: "100%",
                  height: "auto",
                }}
              />
              <div className="p-2">
                {/* truncate */}
                <p className="line-clamp-2 text-md">{item.overview}</p>
                <h2 className="truncate text-lg font-bold">
                  {item.title || item.name}
                </h2>
                <div className="flex items-center space-x-1 ">
                  <p>{item.release_date || item.first_ait_date}</p>
                  <FiThumbsUp />
                  <p>{item.vote_count}</p>
                </div>
              </div>
              {/* <img className='sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200' src={`${urlImage}${item.backdrop_path || item.poster_path}`}/> */}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default CardMovies;
