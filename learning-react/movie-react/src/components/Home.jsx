import React from "react";
import { useStateContext } from "../context/StateContext";

const Home = () => {
  const { movie } = useStateContext();

  console.log(movie);
  return (
    <div className=" flex flex-wrap gap-10 justify-center mt-10">
      {movie.map((m) => {
        return (
            <div key={m.id}>
                <img src={"https://image.tmdb.org/t/p/w300" + m.backdrop_path} className=" rounded" />
              <p className=" text-xs font-semibold">{m.title}</p>
            </div>
        );
      })}
    </div>
  );
};

export default Home;
