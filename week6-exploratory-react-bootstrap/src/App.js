import './App.css';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BiSolidDashboard } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { SiSimpleanalytics } from "react-icons/si";
import { PiPackageFill } from "react-icons/pi";
import { RiSettings5Fill } from "react-icons/ri";

import { FaBell } from 'react-icons/fa';  // Notification icon
import { AiOutlineSearch } from 'react-icons/ai';  // Search icon
import { Dropdown } from 'react-bootstrap'; // Dropdown for user profile

function App() {
  return (
    // Outer App
    <div className="App" > 

      <Navbar expand="lg" >
       <div className='NavigationSidebar'>
         <Navbar.Brand href="#home">Navigation Sidebar</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <div className='navigation-content'>


        {/* Nav Content */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex-column">
          <Nav.Link href="#home">
          <BiSolidDashboard /> Dashboard</Nav.Link>
          <Nav.Link href="#link">
          <FaUsers /> Users</Nav.Link>
          <Nav.Link href="#link">
          <SiSimpleanalytics /> Analytics</Nav.Link>
          <Nav.Link href="#link">
          <PiPackageFill/> Orders</Nav.Link>
          <Nav.Link href="#link">
          <RiSettings5Fill /> Settings</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </div>
         </div>
           
      
            </Navbar>

        <div className='Footer'>
          <p> Footer </p>
        </div>

            </div> //  Outer app



        
  );
}

export default App;