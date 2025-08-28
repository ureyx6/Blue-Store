import React from 'react'
import "./ButtonBlack.css"

function Button( {buttonText} : {buttonText:string} ) {
  return (
<button className="button-meow" role="button">{buttonText}</button>
  )
}

export default Button
