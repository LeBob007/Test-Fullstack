import React from 'react'

const MovieEntry = ({movie, update}) => {

  const handleClick = () => {
    update(movie)
  }

  return (
    <div>
      {movie.title}<br></br>
      {movie.year}<br></br>
      {movie.watched
        ? <button onClick={handleClick}>Watched</button>
        : <button onClick={handleClick}>To Watch</button>}
    </div>
  )
}

export default MovieEntry