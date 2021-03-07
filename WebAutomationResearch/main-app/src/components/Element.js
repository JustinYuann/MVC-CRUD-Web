import React from 'react'
// import Input from './elements/Input.js';
// import Checkbox from './elements/Checkbox.js';
// import Select from './elements/Select.js';
import { useForm } from "react-hook-form";
import "./styles.css"


const Element = (props) => { 
  var uniqid = require('uniqid');
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  const recursiveParser = object => {
      const entries = Object.entries({ ...object });
      let children = [];
      entries.forEach(([key, value]) => {
        if (typeof value === "object") {
          children.push(
            <div style={{"marginLeft": "25px", "marginTop": "10px"}}>
              <label>{key}</label>
              {recursiveParser(value)}
            </div>
          )
        } else {
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

  return (
      <>
        <form onSubmit = {handleSubmit(onSubmit)}>
          {recursiveParser(props.data)} 
          <input type = "submit" />
        </form>
      </>
  )
}

export default Element