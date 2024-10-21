import './App.css';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BiSolidDashboard } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { SiSimpleanalytics } from "react-icons/si";
import { PiPackageFill } from "react-icons/pi";
import { RiSettings5Fill } from "react-icons/ri";

function App() {
  return (
    <div className="App" >
      <Navbar expand="lg" className="justify-content-left">
        <Navbar.Brand className="flex-column" href="#home">Navigation Sidebar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
            </Navbar>
    </div>
  );
}

export default App;