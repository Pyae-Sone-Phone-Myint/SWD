import React, { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=1f7f67e76769f345bface9d76e12f37e&language=en-US&page=1`
    );
    const { results } = await api.json();
    setMovie(results);
  };
  const data = { movie };
  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const useStateContext = () => useContext(StateContext);
