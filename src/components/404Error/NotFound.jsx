import React from 'react'
import { ReactComponent as YourSvg } from './404 Error-rafiki.svg'
import './NotFound.css'

function NotFound() {
  return (
    <div className='container'>
      <YourSvg className="logo" />
      <p className="text">¡No se encuentra la página!</p>
    </div>
  );
}

export default NotFound