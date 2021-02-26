import React from 'react'
import {Nav,Navbar}from 'react-bootstrap';
import styled from "styled-components";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"

const Title = styled.a`
font-family: 'Tenor Sans', sans-serif;`;

class AuthNav extends React.Component{
render(){
    return(
            <React.Fragment>
               <Navbar bg="dark" variant="dark" >
                    <Navbar.Brand href="/"><Title>Presence Manager </Title></Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link><Title> <Link to="/login">Join us</Link></Title></Nav.Link>
                    </Nav>
                </Navbar>
            </React.Fragment>
    );
}
}

export default AuthNav;