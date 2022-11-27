import React , {useState} from 'react'

const Add = ({add}) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(document.getElementById('Add'))
    let data = ''
    for (const [key, value] of formData) {
      data += value
    }
    add(data)
  }

  return (
    <div>
      <form id='Add' onSubmit={handleSubmit}>
        <input name='newMovie'></input>
        <button>Add</button>
      </form>
    </div>
  )
}

export default Add