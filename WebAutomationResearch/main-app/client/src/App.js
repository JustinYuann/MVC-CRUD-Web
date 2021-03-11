// import { useState, useEffect } from 'react';
import bart from './bartsimpson.json'
import Element from './components/Element';
import List from './components/List.js'
// import "./styles.css"


function App() {  
var clonedJSON = bart;
  console.log(clonedJSON)
  var uniqid = require('uniqid');

  const [elements, setElements] = useState({ apiResponse: "" });
  useEffect (() => {
    setElements(bart[0])
  },[])

  const[initialState, setInitialState] = useState([]);

  useEffect (() =>{
    
  })


  // callAPI(){
  //     fetch("http://localhost:9000/testAPI")
  //         .then(res => res.text())
  //         .then(res => this.setState({ apiResponse: res }));
  // }

  // componentWillMount() {
  //     this.callAPI();
  // }ss


  

  function modifyKeys(obj){
    Object.keys(obj).forEach(key => {
      var id = uniqid();
      var mainid = id;
        obj[`${mainid}_${key}`] = obj[key];
        delete obj[key];
        if(typeof obj[`${mainid}_${key}`] === "object"){
            modifyKeys(obj[`${mainid}_${key}`]);
        }
    });
  }


  constructor(props){
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}

 
  return (
    <div className="App">
      {/* <List collection={bart}/> */}
      {console.log(modifyKeys(clonedJSON))}
      <Element data = {bart}/>
      {/* {newObject(bart)} */}
      <p className = "App-intro">{</p>>
    </div>
  );
}

export default App;