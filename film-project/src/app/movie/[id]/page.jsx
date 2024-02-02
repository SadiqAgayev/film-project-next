import Image from "next/image";

const getMovie = async (id) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWYwNWEwMmNlY2FmMmI4NTQzYjJhMjNiZGI1NDNmYiIsInN1YiI6IjYzYTNlN2ZmNDM1MDExMDA5M2MwZDMxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bD8oToodng_nBaHTJCO1bGMKPZJ9JRwzZnmDJdBOOX0",
    },
  };

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    options
  );
  return res.json();
};

export default async function Page({ params }) {
  const id = params.id;
  const movieDetail = await getMovie(id);

  console.log(params);

  if (!movieDetail) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="">
        <Image
          height={400}
          width={400}
          src={`http://image.tmdb.org/t/p/w780/${movieDetail.backdrop_path}`}
          alt="movie"
        />
      </div>
    );
  }
}
