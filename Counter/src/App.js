import { useState } from "react"
import Counter from "./components/Counter"

const App = () =>{
  const [count,setCount]=useState(0)

  const IncreaseCount = ()=>{
    setCount (count+1)
  }

  const DecreaseCount = ()=>{
    if(count>0){
      setCount (count-1)
    }
  }

  const Reset = ()=>{
    setCount (0)
  }
  return(
    <div className="App">
      <h1>
        Counter
        <Counter Inc={IncreaseCount} Dec={DecreaseCount} Reset={Reset} count={count}/>
      </h1>
    </div>
  )
}


export default App