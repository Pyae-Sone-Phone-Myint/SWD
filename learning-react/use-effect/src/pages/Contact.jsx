import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Contact = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      Contact
      <Link to={"/"}>
        <button>Home</button>
      </Link>
      <h3>{location.state ?.key}</h3>
    </div>
  )
}

export default Contact
