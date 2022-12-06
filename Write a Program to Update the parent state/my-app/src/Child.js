import React, { useLayoutEffect, useState } from 'react';
const Child = ({ name, change }) => {
    const [newName, setNewName] = useState(name);
    return (
       <div>
       <input
          placeholder="Enter new name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
       />
       <button onClick={() => change(newName )}>Change</button>
       </div>
    );
 };

 export default Child;