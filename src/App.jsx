import "./App.css"

import { useState } from "react"

// ! Components 
import Button from "./Component/button/button"
const App = () => {
  const [counter, setCounter] = useState(0)

  const decrement = () => {
    setCounter(counter - 1 )
  }
  const increment = () => {
    setCounter(counter  + 1 )
  }

let counterClass = ""

if(counter>0) {
  counterClass = "positive"
}
if(counter<0) {
  counterClass = "negative"
}

  return (
    <div className="App">
      <Button click={decrement}> Decrease </Button>
      <p  className={`counter ${counterClass}`}>{Math.abs(counter)}</p>
      <Button click={increment}>Increase</Button>
    </div>
  )
}

export default App