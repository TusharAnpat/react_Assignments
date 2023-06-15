import './App.css';
import Createcomposeteam from "./components/composeteam";
import { Route, Routes } from "react-router-dom";
import Firstquarter from './components/firstquarter';
import { useState } from "react";
import Display from './components/Display';
import FormdataPdf from './components/pdfViewer/FormdataPdf';
function App() {

  const [formDetails, setFormDetails] = useState({ FirstName: '', LastName: '', Height: '', Position: '' });
  const [data, setData] = useState([]);

  return (
      <Routes>
        <Route path='/' element={<Createcomposeteam formDetails={formDetails} setFormDetails={setFormDetails}/>} />
        <Route path='/composeteam' element={<Createcomposeteam formDetails={formDetails} setFormDetails={setFormDetails}/>} />
        <Route path='/FirstQuarter' element={<Firstquarter formDetails={formDetails} setFormDetails={setFormDetails}/>} />
        <Route path='/PlayersList' element={<Display data={data} setData={setData}/>} />
        <Route path='/FormDataPdf' element={<FormdataPdf formArray={data}/>} />
      </Routes>      
  );
}
export default App;
