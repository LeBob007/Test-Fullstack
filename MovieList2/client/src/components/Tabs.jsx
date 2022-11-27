import React from 'react'

const Tabs = ({setSelectedTab}) => {

  const toWatch = () => {
    setSelectedTab(false)
  }

  const watched = () => {
    setSelectedTab(true)
  }

  return (
    <div>
      <button onClick={toWatch}>
        To Watch
      </button>
      <button onClick={watched}>
        Watched
      </button>
    </div>
  )
}

export default Tabs