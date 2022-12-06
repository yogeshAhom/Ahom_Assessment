import logo from './logo.svg';
import './App.css';

function App() {
  const array =  [ "user1", "user2", "user3", "user4", "user5", "user6", "user7"]
  return (
    <div>
      {
        array.map((item)=>(
          <>
            <p>{item}</p>
          </>
        )

        )
      }
    </div>
  );
}

export default App;
