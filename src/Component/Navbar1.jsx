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
   return axios(`https://api.themoviedb.org/3/search/movie?api_key=7e47368dc262a55c9d2e8fbf9af6cfac&language=en-US&query=${inpdata}&include_adult=true`).then((res)=>console.log(res))
     
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
    <Navbar bg="black" expand="lg" variant='dark'>
      <Container fluid>
        <Navbar.Brand href="/"><i>Movies</i></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
             onChange={handleMovie}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button     variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;