// import { useState } from "react";
// import "./App.css";
// import { useMemo } from "react";

// function App() {
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);

//   const fcount1 = () => setCount1(count1 + 1);
//   const fcount2 = () => setCount2(count2 + 1);
//   const isEven = useMemo(() => {
//     let x = 0;
//     while (0 < 100000) {
//       x++;
//       return count1 % 2 === 0;
//     }
//   },[count1])
//   return (
//     <div className="App">
//       <button onClick={fcount1}>Count 1 : {count1}</button>
//       <p>{isEven ? "Even" : "Odd"}</p>
//       <button onClick={fcount2}>Count 2 : {count2}</button>
//     </div>
//   );
// }

// export default App;


// import { useRef } from 'react';
// import './App.css';
// import { useEffect } from 'react';

// function App() {
//   const x = useRef(null)
//   useEffect(()=>{
//     x.current.focus()
//   },[])
//   return (
//     <div className="App">
//     <input ref={x}/>
//     </div>
//   );
// }

// export default App;

import { useState } from 'react';
import './App.css';
import { useRef } from 'react';
import { useEffect } from 'react';

function App() {
  const [timer ,setTimer] = useState(0)
  let x = useRef(null)
  useEffect(()=>{
    x.current = setInterval(()=>{
      setTimer(timer+1)
      return clearInterval(x.current)
    },1000)
  },[timer])
  
  return (
    <div className="App">
    <p>Timer : {timer}</p>
    <button onClick={()=>clearInterval(x.current)}>Stop</button>
    </div>
  );
}

export default App;