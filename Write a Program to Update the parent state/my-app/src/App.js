
import React, { useLayoutEffect, useState } from 'react';
import Child from './Child';
const App = () => {
   const [name, setName] = useState('Rahul');
   return (
      <div>
      {name} has email id of rahul@tutorialspoint.com
      <div>
         <Child name={name} change={setName} />
      </div>
      </div>
   );
};

export default App;
