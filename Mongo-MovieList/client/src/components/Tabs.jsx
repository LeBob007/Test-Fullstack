import React from 'react'

const Tabs = ({set}) => {

  const toWatch = () => {
    set(false)
  }

  const watched = () => {
    set(true)
  }

  return (
    <div>
      <button onClick={toWatch}>To Watch</button>
      <button onClick={watched}>Watched</button>
    </div>
  )
}

export default Tabs