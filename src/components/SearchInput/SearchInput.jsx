import React from 'react'
import './SearchInput.css'

function SearchInput() {
  return (
    <div>
        <input placeholder='Buscar...' className='input-search'/>
        <button className='btn-search'>Buscar</button>
    </div>
  )
}

export default SearchInput