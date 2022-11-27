import React , {useState} from 'react'

const Search = ({setQuery}) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(document.getElementById('Search'))
    let data = ''
    for (const [key, value] of formData) {
      data += value
    }

    setQuery(data)
  }

  return (
    <div>
      <form id='Search' onSubmit={handleSubmit}>
        <input name='query'></input>
        <button>Search</button>
      </form>
    </div>
  )
}

export default Search