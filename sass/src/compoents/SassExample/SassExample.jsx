import React from 'react'
import './SassExample.scss'

export default function SassExample() {
  return (
    <div>
      <p>What color will this be?</p>
      <p className="font">What color will this be?</p>
      <p className="base">This will be turquoise</p>
      <p className="inverse">inverse</p>

      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a className="nav__link" href="#">Home</a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#">About</a>
          </li>
        </ul>
      </nav>

      <div className="info"> info </div>
      <div className="alert"> alert </div>
      <div className="success"> success </div>


    </div>
  )
}
