import React from 'react';
import {Container,Col ,Row,Form} from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { store } from 'react-notifications-component';
import login from '../assets/img/login.png'
const Title = styled.h3`
padding-top:20px;
padding-left:4px;
color:#100C43;
font-family: 'Cormorant Garamond', serif;
font-size:30px;`;
const Line = styled.div`
background-color:#58AFFF;
margin-left:20px;
width:80px;
height:2px;`;
const Label = styled.p`
font-family: 'Cantata One', serif;
color:#100C43;`;

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
const ButtonO = styled.button`
width: 204px;
height: 49px;
background: #FFFFFF;
border: 2px solid #6DD3FF;
box-sizing: border-box;
border-radius: 50px;
font-family: Rubik One;
font-style: normal;
font-weight: normal;
font-size: 22px;
line-height: 27px;
margin-left:20px;
margin-bottom:18px;
margin-top:18px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
color: #6DD3FF;
transition: all 500ms;
&:hover{
    transform: translateY(-7px);
    transition: all 500ms;
}
`;

class Login extends React.Component{
        constructor(props){
            super(props);
            this.state ={
               _email:"",
               _pass:"",
            };
            
            this.onFormSubmit = this.onFormSubmit.bind(this);
        }


        ///***************Handle changes for Input*******************/
        emailChange = e =>{
            this.setState({
                _email:e.target.value,
            })
        }
        passChange = e =>{
            this.setState({
                _pass:e.target.value,
            })
        }



        ///*******************Every end is a new begining (end of input start of sending with *-* axios //creted and designed by Abdo)******************** */
        onFormSubmit= e =>{
            e.preventDefault();
            const data ={email:this.state._email,pass:this.state._pass}
            console.log(data);
            console.log(URL); 
            return axios.post("http://localhost:8090/api/login",data)
            .then(response =>{
                response.data === 1? store.addNotification({
                    title: "",
                    message: "Student Added Sucssesfully",
                    type: "success",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                      duration: 2000,
                      onScreen: true,
                      pauseOnHover: true
                    }
                  }):store.addNotification({
                    title: "",
                    message: "Error ",
                    type: "error",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                      duration: 2000,
                      onScreen: true,
                      pauseOnHover: true
                    }
                  })
            });
                        
        }


    render() {
        return(
                <React.Fragment >
                    
                    <Container>
                        <br/><br/><br/>
                    <Row className="add">
                        <Col md="6" className=" ">
                            <img className="img-fluid" src={login}></img>
                        </Col>
                        <Col md="6">
                           <Title> <h1>Login</h1> </Title>
                          <Line> <div></div></Line>
                        <Form className="pt-md-4 pl-md-4" onSubmit={this.onFormSubmit}>
                           <Row> 
                           <Col md="6">
                        <Form.Group controlId="formBasicfName">
                            <Form.Label><Label>First Name</Label></Form.Label>
                            <Form.Control type="text" onChange={this.emailChange}  placeholder="Email" />
                        </Form.Group>
                        </Col>
                        <Col md="6">
                        <Form.Group controlId="formBasicfName">
                            <Form.Label><Label>Last Name</Label></Form.Label>
                            <Form.Control type="text" onChange={this.emailChange}  placeholder="Email" />
                        </Form.Group>
                        </Col>
                        <Col md="12">
                        <Form.Group controlId="formBasicfName">
                            <Form.Label><Label>Email</Label></Form.Label>
                            <Form.Control type="text" onChange={this.emailChange}  placeholder="Email" />
                        </Form.Group>
                        </Col>
                       
                        <Button type="submit" >Join Us</Button>
                        
                        </Row>
                        </Form>
                        </Col>
                        
                    </Row>
                    </Container>
                </React.Fragment>
        )
    }
}


export default Login;