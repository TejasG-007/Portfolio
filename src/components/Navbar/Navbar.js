import React from 'react';
import { Navbar, Nav } from 'react-bootstrap/';
import * as SiIcons from 'react-icons/si';
//import { Link } from 'react-router-dom';
import {Link} from 'react-scroll'
import '../../App.css'


const NavbarR = (props) => {
  
  return (

    <>
      <Navbar className="fixed-top"  collapseOnSelect expand="lg" bg="dark" variant="dark">
        
        <Link to="/" 
        spy={true}
        smooth='easeInOutQuart'
        offset={-70}
        duration={900}
        delay={50}
        
        >
          <Navbar.Brand>
            <span style={{ cursor:'pointer',color: 'white', fontSize: '25px' }}>
          <SiIcons.SiTesla />
        </span>
        ejas
        <span style={{ fontSize: '25px' }}>G</span>
        </Navbar.Brand>
        </Link>


        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="ml-auto">

            <Link to="/" 
            spy={true}
            smooth='easeInOutQuart'
            offset={-70}
            duration={900}
            delay={50}
            activeClass="activeclass" className="mr-5" style={{ color: "white", textDecoration: "none" ,cursor:"pointer"}}>Home
            </Link>




            <Link
                        spy={true}
                        smooth='easeInOutQuart'
                        offset={-70}
                        duration={900}
                        delay={50}
            
            to="/projects" activeClass="activeclass" className="mr-5
    " style={{ color: "white", textDecoration: "none" ,cursor:"pointer" }}>Projects
      </Link >




            <Link spy={true}
                        smooth='easeInOutQuart'
                        offset={-70}
                        duration={900}
                        delay={50} className="mr-5" activeClass="activeclass" style={{ color: "white", textDecoration: "none" ,cursor:"pointer"  }}
              to="/about" >About</Link>
            <Link spy={true}
                        smooth='easeInOutQuart'
                        offset={-70}
                        duration={900}
                        delay={50} to="/contact" className="mr-5
    " activeClass="activeclass" style={{ color: "white", textDecoration: "none", cursor:"pointer"}}>Contact</Link>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    </>

  );
}

export default NavbarR;