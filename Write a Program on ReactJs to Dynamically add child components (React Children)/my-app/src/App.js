import React, { useState } from "react";
import Child from "./child";
function App(props) {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const addToList = () => {
    let tempArr = list;
    tempArr.push(value);
    setList(tempArr);
    setValue("")
  };
return (
  <div className="App">
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />{" "}
    <button onClick={()=>{
     addToList()
    }}> Click to Add </button>
   <Child list={list}/>
  </div>
);
}

export default App;