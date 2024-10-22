import './App.css';
import { Container, Nav, Navbar, Col, Stack, Row, Card, ProgressBar, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BiSolidDashboard } from "react-icons/bi"; // Dashboard icon
import { FaUsers } from "react-icons/fa"; // Users icon
import { SiSimpleanalytics } from "react-icons/si"; // Analytics icon
import { PiPackageFill } from "react-icons/pi"; // Orders icon
import { RiSettings5Fill } from "react-icons/ri"; // Settings icon
import { FaBell } from 'react-icons/fa';  // Notification icon
import { AiOutlineSearch } from 'react-icons/ai';  // Search icon
import { NavDropdown } from 'react-bootstrap';
import Footer from './components/Footer';


function App() {
  const activities = [
    { date: '2024-10-21', description: 'Payment Received', amount: '$150.00' },
    { date: '2024-10-20', description: 'Subscription Renewal', amount: '$9.99' },
    { date: '2024-10-19', description: 'Purchase', amount: '$25.00' },
    { date: '2024-10-18', description: 'Refund Processed', amount: '$15.00' },
  ];
  return (

    <Container className='main' fluid>
    <div className="App" >

      {/* Nav and Header Section */}
      <div className='nav-and-header'> 
      <Navbar expand="lg" >

        {/* Navigation Section */}
        <div className='NavigationSidebar'>
            <Navbar.Brand href="#home">Navigation Sidebar</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Navigation Content */}
          <div className='navigation-content'>

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="flex-column">
                <Nav.Link href="#home"> <BiSolidDashboard /> Dashboard</Nav.Link>
                <Nav.Link href="#users"> <FaUsers /> Users</Nav.Link>
                <Nav.Link href="#analytics"> <SiSimpleanalytics /> Analytics</Nav.Link>
                <Nav.Link href="#orders"> <PiPackageFill/> Orders</Nav.Link>
                <Nav.Link href="#settings"> <RiSettings5Fill /> Settings</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
            
        </div>
      </Navbar>

        <Container className='header-title' fluid>
        {/* Header Section */}
        <div className='header'><p>Header</p>
        
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
            <NavDropdown title="User" id="basic-nav-dropdown" className='user-dropdown'>
              <NavDropdown.Item href="#action/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/settings">Settings</NavDropdown.Item>
              <NavDropdown.Item href="#action/logout">Logout</NavDropdown.Item>
            </NavDropdown>
              
          </div>
        </div>
        
        {/* Main Content */}
        <div className='main-content'> Main Content
          <div className='grid-layout'> 
            <Row>
            <Col> 
            Column 1 
            <Stack>
            <Card>
              <Card.Body> Total Users
                <Card.Title>10,245</Card.Title>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>Revenue
                <Card.Title>$45,678</Card.Title>
              </Card.Body>
            </Card>

           <Container className='recent-activity'>
            <h6>Recent User Activity</h6>
            <Table >
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {activities.map((activity, index) => (
                  <tr key={index}>
                    <td>{activity.date}</td>
                    <td>{activity.description}</td>
                    <td>{activity.amount}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            </Container>
            </Stack>
            </Col>

            <Col>
            Column 2
            <Row>
              <Col>
              <Card>
              <Card.Body> Orders
                <Card.Title>1,234</Card.Title>
              </Card.Body>
            </Card>
              </Col>

              <Col> 
              <Card>
              <Card.Body> Conversion Rate
                <Card.Title>2.3%</Card.Title>
              </Card.Body>
            </Card>
               </Col>
            </Row>
            <Stack>
              <p>chart </p>

              <div className='performance-metric'>
              <h6>Performance Metrics</h6>
              <p>CPU Usage</p>
              <ProgressBar variant='secondary' now={70} />
              <p>Memory Usage</p>
              <ProgressBar variant='secondary' now={35} />
              <p>Disk Usage</p>
              <ProgressBar variant='secondary' now={85} />
              </div>

            </Stack>
            </Col>

            </Row>
          </div>
        </div>

       </Container>
      </div>
      

      {/* Footer Section */}
      <Footer />

    
    
    </div>
    </Container>
        
  );
}

export default App;