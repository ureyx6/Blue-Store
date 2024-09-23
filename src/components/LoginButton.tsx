import React from 'react'
import "./LoginButton.css"

function LoginButton ( {buttonText} : {buttonText:string},  ) {
  return (
<button className="button-33" role="button" type="submit">{buttonText}</button>
  )
}

export default LoginButton

