
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Snack from './Snack';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <VendingMachine/>
        <Routes>
          <Route path="/soda" element={<Snack URL={} text={}/>} />
          <Route path="/chips" element={<Snack URL={} text={}/>} />
          <Route path="/sardines" element={<Snack URL={} text={}/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
