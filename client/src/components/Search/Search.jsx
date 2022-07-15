import React from 'react'
import { Link } from 'react-router-dom'

export default function Search() {
  return (
    <div className="input-group mb-3">
      <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
      <ul className="dropdown-menu">
        {/* <li><Link className="dropdown-item" href="#">Action</Link></li>
        <li><Link className="dropdown-item" href="#">Another action</Link></li>
        <li><Link className="dropdown-item" href="#">Something else here</Link></li>
        <li><hr className="dropdown-divider" /></li>
        <li><Link className="dropdown-item" href="#">Separated link</Link></li> */}
      </ul>
      <input type="text" className="form-control" aria-label="Text input with dropdown button"/>
    </div>
  )
}

