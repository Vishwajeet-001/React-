import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(0)

  function increase(){
    setnum(num+1)
  }
  function decrease(){
    setnum(num-1)
  }

  function jump5num(){
    setnum(num+5)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={jump5num}>Jump by 5</button>
    </div>
  )
}

export default App