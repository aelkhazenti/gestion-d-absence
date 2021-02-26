import React from 'react';
import { Container, Col,Row } from 'react-bootstrap';
import styled from 'styled-components';
import home from '../assets/img/home.png';
import AdminNav from '../components/Navbars/AdminNav';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"


const Text= styled.p`
padding-top:70px;
color:#000925;
font-family: 'Cinzel', serif;`;
const Text2= styled.p`
padding-top:16px;
color:#a3a8af;
font-family: 'Cinzel', serif;`;
const Button = styled.button`
width: 204px;
height: 49px;
background: linear-gradient(90deg, #4D9FFF 0%, rgba(255, 255, 255, 0) 70.12%), #6DD3FF;
border-radius: 50px;
border-style: none;
font-family: Rubik One;
font-style: normal;
font-weight: normal;
font-size: 22px;
line-height: 27px;
margin-left:20px;
margin-bottom:18px;
margin-top:18px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
color: #FFFFFF;
transition: all 500ms;
&:hover{
    transform: translateY(-7px);
    transition: all 500ms;
}
`;

class Home extends React.Component{

    render(){
        return(
            <React.Fragment>
                <AdminNav/>
                <br/><br/><br/>
           <Container>
               <Row className="home">  
                   <Col md="6">
                       <h1><Text>Welcom to our Service</Text></h1>
                       <h2><Text2>Create a new Class<br/> and Strat a great experience</Text2></h2>
                       <Link to="/classList"><Button className="animateb">Creat Science</Button></Link>
                   </Col>
                   <Col md="6">
                   <img src={home} className="img-fluid" alt=""/>   
                   </Col>
               </Row>
           </Container>
           </React.Fragment>
        );
    }
}


export default Home;