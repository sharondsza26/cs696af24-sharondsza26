import './Header.css';

import { FaBell } from 'react-icons/fa';  // Notification icon
import { AiOutlineSearch } from 'react-icons/ai';  // Search icon
import { FaUser } from "react-icons/fa";
import { NavDropdown } from 'react-bootstrap';

function Header() {
    return(
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
    )
}

export default Header