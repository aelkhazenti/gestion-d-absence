import React from 'react';
import styled from 'styled-components';
import {Table, Container,Row,Col} from 'react-bootstrap';
import create from '../assets/img/create.png';
import AuthNav from '../components/Navbars/AuthNav' 
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const Tex = styled.p` 
padding-top:20px;
text-aligne:center;
padding-left:4px;
color:#100C43;
font-family: 'Cormorant Garamond', serif;
font-size:30px;`

class ClassesList extends React.Component{
    render(){
        return(
            <React.Fragment>
                <AuthNav/>
                <br/><br/><br/>
               <Container  >
                  <h2><Tex>Select Your Class from here</Tex></h2>
                   <Row className="cen">
                   <Col md="3" className="crad">
                      <Link to="/absence"> <Tex>Class GI-1</Tex></Link>
                   </Col>
                   <Col md="3" className="crad1">
                   <Link to="/absence"><Tex>Class GI-2 </Tex></Link>
                   </Col>
                   <Col md="3" className="crad2">
                   <Link to="/absence"><Tex>Class Tm-1</Tex></Link>
                   </Col>
                   <Col md="3" className="crad3">
                   <Link to="/absence"><Tex>Class Tm-2</Tex></Link>
                   </Col>
                   <Col md="3" className="crad4">
                   <Link to="/absence"> <Tex>Class Ga-1</Tex></Link>
                   </Col>
                   <Col md="3" className="crad4">
                   <Link to="/absence">  <Tex>Class Ga-2</Tex></Link>
                   </Col>
                   </Row>
               </Container>
            </React.Fragment>
        )
    }
}


export default ClassesList;