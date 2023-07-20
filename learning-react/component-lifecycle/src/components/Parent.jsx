import React, { useState } from 'react'
import CompoA from './CompoA'

const Parent = () => {
    const [show, setShow] = useState(true)

    const toggleHandler = () => {
        setShow(!show)
    }

  return (
    <div>
      {show && <CompoA/>}
      <button onClick={toggleHandler}>{show ? "hide" : "show"}</button>
    </div>
  )
}

export default Parent
