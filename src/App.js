import React, { Component, useState } from "react";
import "./App.css";

// class App extends Component {
// const [count, setCount] = useState(0)

//   render() {
//     return (
//       <div>
//         <h1>Un repetidor</h1>
//         <input type="text" placeholder="Empieza a escribir algo" onChange={setState(e.target.value)}/>
//         <p className="repeater">{count}</p>
//       </div>
//     );
//   }
// }

const App = () => {

  const [count, setCount] = useState('')  
  return (
    <div>
      <h1>Un repetidor</h1>
      <input
        type="text"
        placeholder="Empieza a escribir algo"
        onChange={e => setCount(e.target.value)}
      />
      <p className="repeater">{count}</p>
    </div>
  );
};

export default App;
