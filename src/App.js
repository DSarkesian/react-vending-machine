
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Snack from './Snack';
import VendingMachine from './VendingMachine';

const SODA_URL = "https://images.heb.com/is/image/HEBGrocery/000145352";
const CHIPS_URL = "https://m.media-amazon.com/images/I/81vJyb43URL._SL1500_.jpg";
const SARDINE_URL = "https://www.mashed.com/img/gallery/how-a-sardine" +
  "-shortage-made-canned-tuna-possible/intro-1644527626.jpg";

const SODA_TEXT = 'Coke can';
const CHIPS_TEXT = 'Lays bag';
const SARDINE_TEXT = 'Sardines';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <VendingMachine />
        <Routes>
          <Route
            path="/"
            element={<div></div>} />
          <Route 
            path="/soda" 
            element={<Snack URL={SODA_URL} 
            text={SODA_URL}/>} />
          <Route 
            path="/chips" 
            element={<Snack URL={CHIPS_URL} 
            text={CHIPS_TEXT}/>} />
          <Route 
            path="/sardines" 
            element={<Snack URL={SARDINE_URL} 
            text={SARDINE_TEXT}/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
