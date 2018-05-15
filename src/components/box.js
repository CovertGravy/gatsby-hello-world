import React from 'react';
// import swal from 'sweetalert2';

const box = (props) => {
  
  return (
    <span>{props.name} <input type="text" onChange={props.namechanged} value={props.name}/></span>
  );
}

export default box;