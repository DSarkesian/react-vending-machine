import React from "react";
import { Link } from "react-router-dom";

/**
 * props : URL, TEXT
 *
 */

function Snack({URL, text}) {
  return (
    <div>
      <img src ={URL} alt={text}/>
      <h1><Link to="/">go back </Link></h1>
    </div>
  )
}

export default Snack
