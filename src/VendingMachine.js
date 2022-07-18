import { Link } from "react-router-dom";

function VendingMachine(){
  return(

  <div>
  <h1><Link to ="/soda">soda</Link></h1>
  <h1><Link to ="/chips">chips</Link></h1>
  <h1><Link to ="/sardines">sardines</Link></h1>
  </div>
  );
}
