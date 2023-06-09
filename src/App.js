import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

const useCount=()=>{
  const [count,setCount] = useState(0);
  const [secoundCount,setSecoundCount] = useState(0);
  const handleClick = () => {
    setCount(count+1);
    setSecoundCount(secoundCount+1);
  }
  return [count,secoundCount,handleClick];
}

function App() {
  const [count,secoundCount,handleClick] = useCount();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={handleClick}> {count} - {secoundCount}</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
       
         
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
