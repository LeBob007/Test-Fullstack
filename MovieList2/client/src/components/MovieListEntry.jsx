import React from 'react'

const MovieListEntry = ({movie, update}) => {

  const handleClick = () => {
    update(movie)
  }

  return (
    <div>
      {movie.title}
      {movie.watched
        ? <button onClick={handleClick}>Watched</button>
        : <button onClick={handleClick}>To Watch</button>}
    </div>
  )
}

export default MovieListEntry