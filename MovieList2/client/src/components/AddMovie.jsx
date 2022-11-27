import React from 'react'

const AddMovie = ({add}) => {

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(document.getElementById('add-form'))
    for (const [key, value] of formData) {
      add({title: value, watched: false})
    }
  }

  return (
    <form id='add-form' onSubmit={handleSubmit}>
      <input name='new-movie'></input>
      <button>Add Movie</button>
    </form>
  )
}

export default AddMovie