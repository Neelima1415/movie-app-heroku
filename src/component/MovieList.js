import React, { Component } from 'react';

import Book from "./Book";

import {
  MovieContainer,
  CoverImage,
  MovieName,
  InfoColumn,
  MovieInfo
} from './StyledMovieList';

const MovieList = ( props, { shadow = "#a0c5fa" }) => {
   const { Title, Year, imdbID, Type, Poster } = props.movie;
  return (
    
  <MovieContainer shadow={shadow}>
    <CoverImage src={Poster} />
  <MovieName>{Title}</MovieName>
  <InfoColumn>
    <MovieInfo>Year: {Year}</MovieInfo>
    {/* <MovieInfo>Type: {Type}</MovieInfo> */}
          <Book title={Title}/>
      
  </InfoColumn>
  </MovieContainer>
  );
};

export default MovieList;























