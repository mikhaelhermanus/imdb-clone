import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CardMovies from "@/components/CardMovies";
const SearchPage = () => {
  const [searchResult, setSearchResult] = useState([]);
  const router = useRouter();
  console.log(router.query);
  const { keyword } = router.query;
  console.log(keyword, "line 6 search");
  const fetchSearchParam = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=fbb4a66acd4c03714f3a2a374f130bf7&query=${keyword}&language=en-US&include_adult=false`
      );
      const data = await res.json();
      const results = data.results;
      setSearchResult(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSearchParam();
  }, [searchResult]);

  return (
    <div>
      {searchResult && searchResult.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}
      {searchResult && <CardMovies data={searchResult}/>}
    </div>
  );
};

export default SearchPage;
