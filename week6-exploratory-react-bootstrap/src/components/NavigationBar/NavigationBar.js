import './NavigationBar.css';

import { Container, Navbar, Nav, NavLink } from 'react-bootstrap'
import { BiSolidDashboard } from "react-icons/bi"; // Dashboard icon
import { FaUsers } from "react-icons/fa"; // Users icon
import { SiSimpleanalytics } from "react-icons/si"; // Analytics icon
import { PiPackageFill } from "react-icons/pi"; // Orders icon
import { RiSettings5Fill } from "react-icons/ri"; // Settings icon


function NavigationBar() {
    return(

      <Navbar className='nav-sidebar' expand="lg">
        <Container className='flex-column' fluid>
            <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Navigation Content */}

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="flex-column navigation-content">
                <Nav.Link href="#home"> <BiSolidDashboard /> Dashboard</Nav.Link>
                <Nav.Link href="#users"> <FaUsers /> Users</Nav.Link>
                <Nav.Link href="#analytics"> <SiSimpleanalytics /> Analytics</Nav.Link>
                <Nav.Link href="#orders"> <PiPackageFill/> Orders</Nav.Link>
                <Nav.Link href="#settings"> <RiSettings5Fill /> Settings</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            
        </Container>
        </Navbar>
    )
}

export default NavigationBar;