// import { useState, useEffect } from 'react';
import bart from './bartsimpson.json'
import Element from './components/Element';
import List from './components/List.js'
import Home from './components/Home.js'
// import "./styles.css"
import React from 'react'
import { BrowserRouter, Route, Link, Switch} from "react-router-dom";



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {apiResponse:""}
  }

  // callAPI(){
  //   fetch("http://localhost:9000/testAPI")
  //     .then(res => res.text())
  //     .then(res => res.setState({apiResponse: res}));
  // }

  // componentWillMount(){
  //   this.callAPI();
  // }


  render(){
    const App = () => (
      <div>
        <Switch>
          <Route path = '/CreateForm' 
            render = {(props) =>(
              <Element data = {bart}/>
            )}
          />
          <Route exact path='/' component={Home}/>
        </Switch>
      </div>
    )

    return (
      <Switch>
        <App />
      </Switch>
    );


    
    var clonedJSON = bart;
    console.log(clonedJSON)
    var uniqid = require('uniqid');

    // function modifyKeys(obj){
    //   Object.keys(obj).forEach(key => {
    //     var id = uniqid();
    //     var mainid = id;
    //       obj[`${mainid}_${key}`] = obj[key];
    //       delete obj[key];
    //       if(typeof obj[`${mainid}_${key}`] === "object"){
    //           modifyKeys(obj[`${mainid}_${key}`]);
    //       }
    //   });
    // }


  }
}

export default App;