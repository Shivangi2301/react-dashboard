import react from 'react';
import "./sidebar.css"
export default function Sidebar(){ 

    return (
         
        <div> 
            <div id="mySidebar" className="sidebar">
  <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">×</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
</div>

<div id="main">
  <button className="openbtn" onclick="openNav()">☰ Open Sidebar</button>  
  <h2>Collapsed Sidebar</h2>
  <p>Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.</p>
</div>
        </div>
    )
}
