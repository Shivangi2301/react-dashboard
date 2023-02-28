
import './App.css';
import React from "react";
import {Link} from 'react-router-dom';
//  import ReactDOM from "react-dom/client";
import { Routes, Route, useNavigate } from "react-router-dom";
// import UtilitiesOthers from './component/utilitiesothers';
import Buttons from "./component/buttons";
import Login from "./component/login";
import ForgotPassword from "./component/forgotpassword";
import Register from "./component/register";
import Charts from "./component/charts";
import Cards from "./component/cards";
import UtilitiesColor from "./component/utilitiescolor";
import UtilitiesAnimation from "./component/utilitiesanimation";
import Err404 from "./component/404";
import UtilitiesOthers from "./component/utilitiesothers"

function App() {
  
  return (
    <div className="App">
    <UtilitiesColor/>
    <UtilitiesAnimation/>
     <UtilitiesOthers/> 
      <Buttons/>
      <Login/>
      <ForgotPassword/>
      <Register/>
      <Charts/>
      <Err404/>
       {/* <Cards/>  */}


       <nav>
        <ul>
          <li>
            
            <Link to="/">UtilitiesOthers</Link> 
          </li>
          <li>
            <Link to="/buttons">Buttons</Link>
          </li>
          <li>
            <Link to="/charts">Charts</Link>
          </li>
          <li>
            <Link to="/utilitiescolors">UtilitiesColor</Link>
          </li>
          <li>
            <Link to="/404"Err404></Link>
          </li>
          <li>
            <Link to="/others">Others</Link>
          </li>
        </ul>
      </nav>
      <Routes>
      {/* <Route path="/" element={<Navigate } /> */}
          <Route path="/utilitiesothers" element={<UtilitiesOthers/>} /> 
        <Route path="/buttons" element={<Buttons />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="utilitiescolor" element={<UtilitiesColor />} />
      
        <Route path="/utilitiesanimation" element={<UtilitiesAnimation/>} />
        
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
      </Routes> 
 

      
    </div>
  );
  //JSX Ends
}

export default App;
