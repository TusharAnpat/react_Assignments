import './App.css';
import Createcomposeteam from "./components/composeteam";
import { Route, Routes } from "react-router-dom";
import Firstquarter from './components/firstquarter';
import { useState } from "react";
import Display from './components/Display';
function App() {

  const [formDetails, setFormDetails] = useState({ FirstName: '', LastName: '', Height: '', Position: '' });

  return (
      <Routes>
        <Route path='/' element={<Createcomposeteam formDetails={formDetails} setFormDetails={setFormDetails}/>} />
        <Route path='/composeteam' element={<Createcomposeteam formDetails={formDetails} setFormDetails={setFormDetails}/>} />
        <Route path='/FirstQuarter' element={<Firstquarter formDetails={formDetails} setFormDetails={setFormDetails}/>} />
        <Route path='/PlayersList' element={<Display formDetails={formDetails} setFormDetails={setFormDetails}/>} />
      </Routes>
      
  );
}
export default App;
