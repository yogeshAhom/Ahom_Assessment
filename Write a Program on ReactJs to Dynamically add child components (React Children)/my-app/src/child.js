
import React, { useState } from "react";

function Child(props) {
  
  return(
    <>
     <ul>
        {props.list.length > 0 &&
            props.list.map((item, i) => <li>{item} </li>)}
      </ul>
    </>
  )
}

export default Child;