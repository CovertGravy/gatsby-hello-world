import React from 'react';
// import swal from 'sweetalert2';
//box
const box = (props) => {
  
  return (
    <span>{props.name} <input type="text" onChange={props.namechanged} value={props.name}/></span>
  );
}

export default box;