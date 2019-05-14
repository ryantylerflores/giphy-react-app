import React from 'react';
import './styles.css';

const Button = (props) => {
  return(
    <button
      onClick={ props.actions }
      className={`${props.classes} btn-style mx-2`}
    >
      {props.text}
    </button>
  )
}

export default Button;