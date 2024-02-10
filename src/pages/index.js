import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import CardMovies from "@/components/CardMovies";
const API_KEY = process.env.API_KEY;

const HomePage = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre") || "fetchTrending";
  const [data, setData] = useState([]);
  const yourAPIKEY = ''
  
  const fetchTheData = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/${
          genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
        }?api_key=${yourAPIKEY}&language=en-US&page=1`,
        { next: { revalidate: 10000 } }
      );

      const data = await res.json();
      const results = data.results;
      setData(results);
    } catch (error) {
      console.log(error, "eerror fetching :");
    }
  };
  useEffect(() => {
    fetchTheData();
  }, [genre]);
  return (
    <div>
      <CardMovies data={data} />
    </div>
  );
};

export default HomePage;
