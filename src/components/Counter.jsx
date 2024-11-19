import React, { useState } from 'react'

const counter = () => {
  const [count,setCount] = useState(0);
  function BtnClickHandler(){
    setCount(count + 1)
  }

  return (
    <div>
      <p>The count is {count}</p>
      <button onClick={BtnClickHandler}>Click Me</button>
    </div>
  )
}

export default counter