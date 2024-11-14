import React, { useContext } from 'react'
import {ThemeContext} from "../contexts/ThemeContext";
import "./Toggle.css"
function Toggle() {
  const {theme,toggleTheme}=useContext(ThemeContext)
  return (
    <div id="app" className={theme}>
      <div className="container">
        <button id="theme-toggle" className='toggle-btn' onClick={toggleTheme}>{theme}</button>
      </div>
    </div>
  )
}

export default Toggle
