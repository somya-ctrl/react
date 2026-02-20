import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter]=useState(15);
  const addvalue=()=>{
    if(counter>=20){
      alert("value cannot be more than 20");
      return ;
    }
    console.log("add value",counter);
    setcounter(counter+1);
  }

  const decreasevalue=()=>{
    if(counter<=0){
      alert("value cannot be negative");
      return;
    }
    console.log("decrease value",counter);
    setcounter(counter-1);
  }

  return (
    <>
     <h1>Counter app</h1>
     <h2>counter value: {counter}</h2>
     <button onClick={addvalue}>Add value</button>
     <br/>
     <button onClick={decreasevalue}>Decrease value</button>
    </>
  )
}

export default App
