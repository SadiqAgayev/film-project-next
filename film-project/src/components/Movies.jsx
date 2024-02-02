"use client";

import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Movies = () => {
  const [popular, setPopular] = useState([]);
  const searchParams = useSearchParams();

  const genre = searchParams.get("genre");

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWYwNWEwMmNlY2FmMmI4NTQzYjJhMjNiZGI1NDNmYiIsInN1YiI6IjYzYTNlN2ZmNDM1MDExMDA5M2MwZDMxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bD8oToodng_nBaHTJCO1bGMKPZJ9JRwzZnmDJdBOOX0",
      },
    };

    if (genre) {
      fetch(
        `https://api.themoviedb.org/3/movie/${genre}?language=en-US&page=1`,
        options
      )
        .then((response) => response.json())
        .then((response) => setPopular(response?.results))
        .catch((err) => console.error(err));
    } else {
      fetch(
        `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`,
        options
      )
        .then((response) => response.json())
        .then((response) => setPopular(response?.results))
        .catch((err) => console.error(err));
    }
  }, [genre]);

  const router = useRouter();

  return (
    <div className="flex flex-wrap justify-center items-center gap-20 pb-5">
      {popular?.map((p) => (
        <div
          style={{ cursor: "pointer" }}
          onClick={() => router.push(`/movie/${p.id}`)}
          key={p.id}
        >
          <Image
            height={400}
            width={400}
            src={`https://image.tmdb.org/t/p/original/${
              p.backdrop_path || p.poster_path
            }`}
            alt="movie"
          />
        </div>
      ))}
    </div>
  );
};

export default Movies;
