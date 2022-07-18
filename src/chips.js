import React from "react";
import { Link } from "react-router-dom";
const CHIPS_IMAGE = "https://www.renderhub.com/luxmi-3d-studio/coke-can/coke-can-01.jpg"

function Soda() {
  return (
    <div>
      <img src ={SODA_IMAGE} alt={"SODA"}/>
      <h1><Link to="/">go back </Link></h1>
    </div>
  )
}

export default Soda
