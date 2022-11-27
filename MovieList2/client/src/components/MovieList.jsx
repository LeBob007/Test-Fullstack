import React from 'react'

import MovieListEntry from './MovieListEntry.jsx'

const MovieList = ({movies, query, update, selectedTab}) => {
  const searchList = movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()))

  return (
    <div>
      {searchList.length > 0
        ? searchList.filter(movie => movie.watched == selectedTab).map((movie, index) => <MovieListEntry key={index} movie={movie} update={update}/>)
        : <h4>No Movies Found</h4>}
    </div>
  )
}

export default MovieList