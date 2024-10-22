import { Container, Col, Row, Stack, Nav, NavLink } from 'react-bootstrap'
import { FaReact } from "react-icons/fa";
import './Footer.css'

function Footer() {
    return(
        <footer>
        <Container className='footer' fluid>
            <Row>
            <div className="footer-content bg-secondary text-white p-4">
                <div className='mx-5'>
                <div className='react-icon'>< FaReact /></div>
                <h6>&copy; 2024 Sharon Dsouza. </h6>
                <p>All rights reserved.</p>
                </div>

            <div className='links'>
                <Nav className="flex-column fs-9 footer-links">
                <Nav.Link href="#home" className='text-white'>Dashboard </Nav.Link>
                <Nav.Link href="#settings" className='text-white'>Settings </Nav.Link>
                <Nav.Link href="#" className='text-white'>Terms of Service </Nav.Link>
                <Nav.Link href="#" className='text-white'>Privacy Policy</Nav.Link>
                </Nav>
            </div>

            <div className='contact-us'>
                <h6> Contact Us! </h6>
                <p>mailus@gmail.com</p>
                <p>Phone: +1 (888)888 8888</p>
            </div>
      </div> 

      </Row>
        </Container>
        </footer>
    )
}

export default Footer