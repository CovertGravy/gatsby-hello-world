import React from 'react';
// import swal from 'sweetalert2';
//box
const box = (props) => {

  return (
    <div className="col s4">
      <div className="card">
        <h3>Hello {props.name}</h3>
        <div className="input-field">
          <label htmlFor="input1">Enter your name (Two way binding showcase)</label>
          <input type="text"
            id="input1"
            onChange={props.namechanged}
          />
        </div>
      </div>

    </div>

  );
}

export default box;