import React, { useState } from "react";
import Logout from "./Logout";
import { useUserAuth } from "../context/UserAuthContext";
import MovieList from "./MovieList";

import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";
import {
  Container,
  Header,
  AppName,
  SearchBox,
  SearchIcon,
  SearchInput,
  MovieListContainer,
} from "./StyledHome";

const API_KEY = "c67a45f5";

function Home() {
  const [searchQuery, updateSearchQuery] = useState();

  const [timeoutId, updateTimeoutId] = useState();
  const [movieList, updateMovieList] = useState([]);

  const { Auth } = useUserAuth();
  console.log(Auth);
  const fetchData = async (searchString) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`
    );

    updateMovieList(response.data.Search);
  };
  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    updateSearchQuery(event.target.value);
    const timeout = setTimeout(() => fetchData(event.target.value), 500);
    updateTimeoutId(timeout);
  };

  return (
    <Container>
      <Header>
        <AppName>React Movie App</AppName>
        <SearchBox>
          <SearchIcon src="/search_icon.png" />
          <SearchInput
            placeholder="Search Movie"
            value={searchQuery}
            onChange={onTextChange}
          />
        </SearchBox>
        <Logout />
      </Header>

      <MovieListContainer>
        {movieList?.length
          ? movieList.map((movie, index) => (
              <MovieList key={index} movie={movie} />
            ))
          : "No Movie Search"}
      </MovieListContainer>
    </Container>
  );
}

export default Home;
