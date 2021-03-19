import React from 'react'
import KneeArthrosis from './KneeArthrosis'

import './App.css'


const Arthrosis = () => {
  return (
    <div className="healthy-knee-page">
      <div className="info-text">
        Some relevant text to describe the situation in brief.
      </div>
      <div className="Knee" id="knee-arthrosis">
        <KneeArthrosis/>
      </div>
    </div>
  )
}

export default Arthrosis