import React, {useState} from 'react'

const Search = ({setQuery}) => {

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(document.getElementById('search-form'))
    for (const [key, value] of formData) {
      setQuery(value)
    }

  }

  return (
    <form id='search-form' onSubmit={handleSubmit}>
      <input name='search-query'></input>
      <button>Search</button>
    </form>
  )
}

export default Search