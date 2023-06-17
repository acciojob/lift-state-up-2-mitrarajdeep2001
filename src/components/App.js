
import React, {useState} from "react";
import './../styles/App.css';
import ChildComponent from "./ChildComponent";

const App = () => {
  const [inputValue, setInputValue] = useState('')
  return (
    <div className="parent">
        <p>{inputValue}</p>
        <ChildComponent setStateVariable={setInputValue}/>
    </div>
  )
}

export default App
