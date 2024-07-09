import React from 'react'
import { useState } from 'react'
function State(props) {
  

  return (
  <>
  <button onClick={props.add}>Add</button>
{props.count}
<button onClick={props.minus}>Minus</button>

<button onClick={props.reset}>Reset</button>
  </>
  )
}

export default State