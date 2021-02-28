import React from 'react'
// import Input from './elements/Input.js';
// import Checkbox from './elements/Checkbox.js';
// import Select from './elements/Select.js';

const Element = (props) => {
    const newObject = object => {
        const entries = Object.entries({ ...object });

        let children = [];
        entries.forEach(([key, value]) => {
          if (typeof value === "object") {
            children.push(
              // <ul>
              //   {/* <div class="filter-heading">{value}</div> */}
              //   <h1>{key}</h1>
              //   {newObject(value)} 
              // </ul>
              <div style={{"marginLeft": "25px", "marginTop": "10px"}}>
                <h1>{key}</h1>
                {newObject(value)}
              </div>

            )
          } else {
              console.log(key)
              children.push(
                <li key={value}>
                    {key}
                    <input type="text" placeholder={value} />              
                </li>
              )


                
           

          }
        });
        return <div>{children}</div>
    }

    return (
        <>
            {newObject(props.data)}
        </>
    )
}

export default Element
