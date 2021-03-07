// import { useState, useEffect } from 'react';
import bart from './bartsimpson.json'
import Element from './components/Element';
import List from './components/List.js'
// import "./styles.css"


function App() {  

  // const [elements, setElements] = useState(null);
  // useEffect (() => {
  //   setElements(bart[0])
  // },[])

  // const newObject = object => {
  //   // const entries = Object.entries({ ...object });
  //   Object.entries({ ...object }).forEach(([key, value]) => {
  //     // console.log(key)
  //     if (typeof value === "object") {
  //       console.log(key)
  //       // console.log("bla")
  //       newObject(value);
  //     } else {
  //       // console.log("fudge")
  //       return <Element field = {value} />
  //     }
  //   });
  // };
  
  return (
    <div className="App">
      {/* <List collection={bart}/> */}
      <Element data = {bart}/>
      {/* {newObject(bart)} */}
    </div>
  );
}

export default App;
