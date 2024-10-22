import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaBell } from 'react-icons/fa';  // Notification icon
import { AiOutlineSearch } from 'react-icons/ai';  // Search icon
import { FaUser } from "react-icons/fa";
import { NavDropdown } from 'react-bootstrap';

import NavigationBar from './components/NavigationBar/NavigationBar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainContent from './components/MainContent/MainContent'



function App() {

  return (

    <Container className='main' fluid>
    <div className="App" >

      {/* Nav and Header Section */}
      <div className='nav-and-header'> 
      <Navbar expand="lg">

        {/* Navigation Section */}

        <NavigationBar />
        
      </Navbar>
      

        <Container className='header-title' fluid>
        {/* Header Section */}
        <div className='header'>
        
          {/* Header Content */}
          <div className='header-content'>

            {/* Search Bar */}
            <div className="search-bar">
            <AiOutlineSearch className="search-icon" />
            <input type="text" placeholder="Search..." />
            </div>

            {/* Notification */}
            <div className="notification">
            <FaBell className="notification-icon" />
            </div>

            {/* User Drop Down */}
            <NavDropdown title={<FaUser style={{ color: 'grey' }}/>} id="basic-nav-dropdown" className='user-dropdown'>
              <NavDropdown.Item href="#action/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/settings">Settings</NavDropdown.Item>
              <NavDropdown.Item href="#action/logout">Logout</NavDropdown.Item>
            </NavDropdown>
              
          </div>
        </div>
        
        {/* Main Content */}
        <MainContent />

       </Container>
      </div>
      

      {/* Footer Section */}
      <Footer />

    
    
    </div>
    </Container>
        
  );
}

export default App;