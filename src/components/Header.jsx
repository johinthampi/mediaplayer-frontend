import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faVideo} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'


function Header() {
  return (
    <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand style={{color:"orange"}}>
            <Link to="/" style={{textDecoration:'none',color:'orange'}}><FontAwesomeIcon  icon={faVideo}/>  Media Player</Link>
          
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header