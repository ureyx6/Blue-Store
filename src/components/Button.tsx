import React from 'react'
import "./Button.css"

function Button( {buttonText} : {buttonText:string} ) {
  return (
<button className="button-28" role="button">{buttonText}</button>
  )
}

export default Button
