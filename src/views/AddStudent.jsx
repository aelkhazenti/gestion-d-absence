import React from 'react';
import styled from 'styled-components';
import {Container,Col ,Row,Form} from 'react-bootstrap';
import student from '../assets/img/student.png';
import AuthNav from '../components/Navbars/AuthNav' 
import Axios from 'axios';
const Title = styled.h3`
padding-top:20px;
padding-left:4px;
color:#100C43;
font-family: 'Cormorant Garamond', serif;
font-size:40px;`;
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

class AddStudent extends React.Component{

    constructor(props){
        super(props);
        this.state={
            _fname:"",
            _lname:"",
            _cne:"",
            _abs:0,
            _email:"",
            _class_id:0,
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }
    fnameChange = e =>{
        this.setState({
            _fname:e.target.value,
        })
    }
    lnameChange = e =>{
        this.setState({
            _lname:e.target.value,
        })
    }
    cneChange =e=>{
        this.setState({
            _cne:e.target.value,
        })
    }
    emailChange  = e=>{
        this.setState({
            _email:e.target.value,
        })
    }
    classChange =e=>{
        this.setState({
            _class_id:e.target.value,
        })
    }
    onFormSubmit (e){
        e.preventDefault()
        const data= {fname:this.state._fname,lname:this.state._lname,cne:this.state._cne,abs:this.state._abs,email:this.state._email,class_id:this.state._class_id}
        console.log(data);
        
        Axios.post("http://localhost:8090/api/students",data)
        .then(res=>{
            console.log(res.data);
            
        })
    }
render(){
    return(
        <React.Fragment>
            <AuthNav/>
            <br/>
              <Container>
                    <Row className="creat">
                        <Col md="6" className="half-create">
                            <img src={student}  className="img-fluid" alt=""/>
                        </Col>
                        <Col md="6">
                           <Title> <h1>Add student</h1> </Title>
                          <Line> <div></div></Line>
                        <Form className="pt-md-4 pl-md-4" onSubmit={this.onFormSubmit} >
                           <Row> 
                        <Col md="6">
                        <Form.Group controlId="formBasicfName">
                            <Form.Label><Label>first Name</Label></Form.Label>
                            <Form.Control type="text" onChange={this.fnameChange} className="inpu" placeholder="First name" />
                        </Form.Group>
                        </Col>
                       
                        <Col md="6">
                        <Form.Group controlId="formBasiclName">
                            <Form.Label><Label>Last Name</Label></Form.Label>
                            <Form.Control type="text" onChange={this.lnameChange} className="inpu" placeholder="Last Name"/>
                        </Form.Group>
                        </Col>
                        <Col md="6">
                        <Form.Group controlId="formBasiclName">
                            <Form.Label><Label>Cne</Label></Form.Label>
                            <Form.Control type="text" onChange={this.cneChange} className="inpu" placeholder="Cne"/>
                        </Form.Group>
                        </Col>
                        <Col md="6">
                        <Form.Group controlId="formBasiclName">
                            <Form.Label><Label>Email</Label></Form.Label>
                            <Form.Control type="email" onChange={this.emailChange} className="inpu" placeholder="Email"/>
                        </Form.Group>
                        </Col>
                        <Col md="12">
                        <Form.Group controlId="formBasiclName">
                            <Form.Label><Label>Class</Label></Form.Label>
                            <select className="custom-select" onChange={this.classChange} >
                                <option value="0">Get Class</option>
                                <option  value="1">GI-1</option>
                                <option  value="2">GI-2</option>
                                <option  value="3">TM-1</option>
                                <option  value="4">TM-2</option>
                                <option  value="5">GA-1</option>
                                <option  value="6">GA-2</option>
                            </select>
                        </Form.Group>
                        </Col>
                        <Button type="submit" >Add Student</Button>
                        </Row>
                        </Form>
                        </Col>
                    </Row>
                    </Container>
        </React.Fragment>
    );
}

}

export default AddStudent;