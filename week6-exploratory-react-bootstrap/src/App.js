import './App.css';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="flex-column">
      <Navbar expand="lg" className="justify-content-left">
        <Navbar.Brand className="flex-column" href="#home">Navigation Sidebar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex-column">
          <Nav.Link href="#home">Dashboard</Nav.Link>
          <Nav.Link href="#link">Users</Nav.Link>
          <Nav.Link href="#link">Analytics</Nav.Link>
          <Nav.Link href="#link">Orders</Nav.Link>
          <Nav.Link href="#link">Settings</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
    </div>
  );
}

export default App;