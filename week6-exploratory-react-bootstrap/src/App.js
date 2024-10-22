import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

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
      
        {/* Navigation Section */}
        <NavigationBar />
              

        <Container className='header-title' fluid>
        {/* Header Section */}
        <Header />
        
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