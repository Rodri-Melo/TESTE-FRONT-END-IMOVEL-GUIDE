import React from 'react'
import Square1 from './Square1'
import Square2 from './Square2'
import Square3 from './Square3'
import Square4 from './Square4'
import './Main.css'
import Square5 from './Square5'
import Square6 from './Square6'

const Main = () => {
  return (
    <main>
      <div className="main-container">
        <Square1 />
        <Square2 />
        <Square3 />
        <Square4 />
        <Square5 />
        <Square6 />
      </div>
    </main>
  )
}

export default Main
