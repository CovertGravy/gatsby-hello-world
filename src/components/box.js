import React from 'react';
// import swal from 'sweetalert2';
//box
const box = (props) => {
  
  return (
    <div>
      <h3>Hello {props.name}</h3>
    <label htmlFor="input1">Enter your name (Two way binding showcase)</label>
      <input type="text"
      id="input1"
      onChange={props.namechanged}
      value={props.name}
      placeholder='Enter your name (Two way binding showcase)'/>
    </div>
    
  );
}

export default box;