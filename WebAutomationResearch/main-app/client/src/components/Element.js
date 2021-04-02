import React from 'react'
// import Input from './elements/Input.js';
// import Checkbox from './elements/Checkbox.js';
// import Select from './elements/Select.js';
import { useForm } from "react-hook-form";
import axios from "axios"
import "./styles.css"
import { useEffect,useState } from 'react';
import DatePicker from "react-datepicker";
// import differenceInCalendarISOYears from 'date-fns/differenceInCalendarISOYears'

const Element = (data) => { 
  var uniqid = require('uniqid');
  var parseISO = require('date-fns/parseISO')

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  const [initialState, setInitialState] = useState([])

  const componentDidMount = () => {

    axios.all([
      axios.get('/CreateForm'), 
      axios.get('/typed.json')
    ])
    .then(axios.spread((obj1, obj2) => {
      setInitialState(obj2.data)
    }));

    // axios.get("/typed.json").then((response) => {
    //   setInitialState(response.data)
    // })

    // axios.get("/CreateForm").then((response) => {
    //   // setInitialState(response.data)
    // })
  }

  var s = 'a string', a = [], o = {}, i = 5;
  function getType(p) {
    if (Array.isArray(p)) return 'array';
    else if (typeof p == 'string') return 'string';
    else if (p != null && typeof p == 'object') return 'object';
    else return 'other';
  }

  //This function will take in what type has been declared and return the applicable field
  function identififyType(field,key){
    console.log(field)
    var fieldType= (field[Object.keys(field)[0]])
    var fieldValue = (field[Object.keys(field)[1]])

    console.log(fieldType,fieldValue)

    //fieldType refers to the field's type for example date or time
    //fieldValue refers to the value set by the JSON for example "19/02/1904"

    if (fieldType === "date"){
      // var parsedDate = (parseISO('2016-01-01'), 1)
      // return <DatePicker selected={parsedDate}  onChange={null}/>
      return <input type = "datetime-local" placeholder = {fieldValue} name = {key} />

    } else if (fieldType === "select"){
      //'select' refers to boolean values
      //select will be filled with yes or no (true or false conversion)
      return (<div>
          <select name = {key} ref={register}>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
      </div>)
    }else{
      return null;
    }
  }
  
  const recursiveParser = object => { 

    var insideObject = false;
      const entries = Object.entries({ ...object });
      let children = [];
       //false means it's not inside an array
      entries.forEach(([key, value]) => {
        // if(insideObject === false) {
          if (getType(value) === "object") {
            var firstKey = (([Object.keys(value)[0]])[0])

            if (firstKey == "type"){
              // var returnComponent = 
              children.push(
                <div>
                  <label>{key}</label>
                  {identififyType(value,key)}
                </div>
              )
            } else {
              children.push(
                <div style={{"marginLeft": "25px", "marginTop": "10px"}}>
                  <label>{key}</label>
                  {recursiveParser(value)}
                </div>
              )
            }

            // }

          } else if (getType(value) === "array") {

            children.push(
              <div style={{"marginLeft": "25px", "marginTop": "10px"}}>
                <label>{key}</label>
                {recursiveParser(value)}
              </div>
            )

          }

        // } else {
        //   value.forEach(([key, value]) => {

        //   })
        // }
        
        
        // else if (insideArray === 1) {
        //   console.log("dsadsad")
        //   children.push(
        //     <>
        //       <label>{key}</label>
        //       thisworked
        //       <input name = {uniqid() + key} ref = {register}/>
        //       <label></label>
        //     </>
        //   )
        //   insideArray = 0;


         else {
            children.push(
              <>
                <label>{key}</label>
                <input name = {uniqid() + key} ref = {register}/>
                <label></label>
              </>
            )
        }
      });
      return <div>{children}</div>
  }

  function objectToPaths(data) {
    var validId = /^[a-z_$][a-z0-9_$]*$/i;
    var result = [];
    doIt(data, "");
    return result;
  
    function doIt(data, s) {
      if (typeof data === "object") {
        if (Array.isArray(data)) {
          for (var i = 0; i < data.length; i++) {
            doIt(data[i], s + "[" + i + "]");
          }
        } else {
          for (var p in data) {
            if (validId.test(p)) {
              doIt(data[p], s + "." + p);
            } else {
              doIt(data[p], s + "[\"" + p + "\"]");
            }
          }
        }
      } else {
        result.push(s);
      }
    }
  }

  return (
      <>
        {componentDidMount()}
        {objectToPaths(initialState)}
        {/* {console.log(initialState)} */}
        <form onSubmit = {handleSubmit(onSubmit)}>
          {recursiveParser(initialState)} 
          <input type = "submit" />
        </form>
      </>
  )
}

export default Element