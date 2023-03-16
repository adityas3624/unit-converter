import React from 'react'
import './Button1.css';

export default function Button1() {
    const length="length";
    const weight="weight";
  return (
    <div className="container">
        <button type="button" value={length} class="btn btn-primary btn-lg my-2 mx-2">Length</button>
        <button type="button" value={weight} class="btn btn-primary btn-lg my-2 mx-2">Weight</button>
    </div>
  )
}
