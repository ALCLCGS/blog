import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
const useCount12=()=>{
 let a=1
 const setCountsx = () => {
  a=a+1;
  return a;
 }
  return [a,setCountsx];
}
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
  debugger
  const [aszx,setCountsx] = useCount12();
  const [count,secoundCount,handleClick] = useCount();
  debugger
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button onClick={handleClick}> {count} - {secoundCount}</button>
         
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
