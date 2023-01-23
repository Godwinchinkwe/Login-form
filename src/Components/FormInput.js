import React from 'react';
import './FormInput';
import "../App.css"

const FormInput = (props) => {
  return (
    <div className='ip'>
        <label>{props.name}</label>
        <input type={props.type} className="input"
        onChange={(e)=> props.handleChange(e)}/>
    </div>
  )
}

export default FormInput