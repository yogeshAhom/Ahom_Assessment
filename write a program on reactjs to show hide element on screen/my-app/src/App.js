
import './App.css';
import React, { useState } from 'react';

function App() {
  const [show, setShow] = useState(true);
  return (
    <div>
    {show?  <p>Write a Program on ReactJs to Show/Hide Element on Screen </p> :null}
     {show? <button onClick={()=>{
      setShow(false)
     }}>hide</button> : <button onClick={()=>{
      setShow(true)
     }}>show</button> }
    
    </div>
    
  );
}

export default App;
