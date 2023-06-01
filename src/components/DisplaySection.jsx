import React from 'react'

// eslint-disable-next-line react/prop-types
function DisplaySection({triggerPreview}) {

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth'})
  }
  return (
    <div className='display-section wrapper'>
        <h2 className="title">New</h2>
        <p className="text">Brilliant</p>
        <span className="description">
            A display that&#39;s up to 2x brighter in the sun.
        </span>
        <button className='button' onClick={triggerPreview}>Try Me!</button>
        <button className='back-button' onClick={handleScrollTop}>Top</button>
    </div>
  )
}

export default DisplaySection