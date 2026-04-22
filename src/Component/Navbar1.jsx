import { Center } from '@chakra-ui/react'
import { useState ,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import axios from 'axios';

function Navbar1() {

  const [data, setData] = useState([]);
  const [inpdata, setIndata] = useState("");
  const handleMovie = (e) => {
    setIndata(e.target.value);
  };
  const fetchMovie = (inpdata) => {
   return axios(`https://api.themoviedb.org/3/search/movie?api_key=7e47368dc262a55c9d2e8fbf9af6cfac&language=en-US&query=${inpdata}&include_adult=true`).then((res)=>setData(res.data.results))
      }

    
useEffect(()=>{
  let id= setTimeout(() => {
    // fetchMovie(inpdata).then((res)=>console.log(res))
    fetchMovie()
  }, 1000);
  const clear=()=>{
    clearTimeout(id)
  };
  return clear
},[inpdata])

  return (
    <Navbar 
      expand="lg" 
      variant='dark'
      style={{
        background: 'linear-gradient(135deg, rgba(15, 12, 41, 0.95), rgba(48, 43, 99, 0.95))',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3)',
        padding: '12px 0'
      }}
    >
      <Container fluid>
        <Navbar.Brand 
          href="/" 
          style={{
            fontSize: '28px',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '1px'
          }}
        >
          🎬 MovieHub
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/" style={{ fontWeight: '500', marginLeft: '20px' }}>Home</Nav.Link>
            <Nav.Link href="#trending" style={{ fontWeight: '500' }}>Trending</Nav.Link>
            <Nav.Link href="#popular" style={{ fontWeight: '500' }}>Popular</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              onChange={handleMovie}
              type="search"
              placeholder="Search movies..."
              className="me-2"
              aria-label="Search"
              style={{
                borderRadius: '25px',
                border: '2px solid rgba(102, 126, 234, 0.3)',
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                padding: '8px 20px'
              }}
            />
            <Button 
              variant="outline-light"
              style={{
                borderRadius: '25px',
                padding: '8px 24px',
                fontWeight: '600',
                border: '2px solid #667eea',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                transition: 'all 0.3s ease'
              }}
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;