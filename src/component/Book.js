import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import {Routes, Route, useNavigate } from 'react-router-dom';

import "./button.css";

export default function Book() {
 
const navigate = useNavigate();

const SeatPicker = () => {
 
  navigate('/Picker');
};

return(
<div>
  <div className="btn">
    <button onClick={SeatPicker}>Book</button>
  <Routes>
    <Route path="/Picker" element={ <SeatPicker /> }/>
  </Routes>
 
  </div>
</div>
);
}



