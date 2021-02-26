import React from 'react';
import styled from 'styled-components';
import {Container,Col ,Row,Form,Table} from 'react-bootstrap';
import create from '../assets/img/create.png';
import axios, { post } from 'axios';
import AuthNav from '../components/Navbars/AuthNav' 
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
const Head = styled.p`
color: rgb(143, 201, 255);
font-size:16px;
text-align:center;
font-family: 'Cormorant Garamond', serif;`;
const Tex = styled.p`
color:black;
font-size:28px;
font-family: 'Cormorant Garamond', serif;`;
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
const Lineg =styled.div`
background-color:#9cff5a;
width:20%;
norder-radius:3px
margin-left:90px;
display:inline-block;
margin-bottom:4px;
margin-right:0px !important;
height:2px;`
const Liney =styled.div`
background-color:#ffc933;
width:20%;
norder-radius:3px
display:inline-block;
margin-bottom:4px;
margin-right:0px !important;
height:2px;`
const Liner =styled.div`
background-color:#ff3370;
width:20%;
norder-radius:3px
display:inline-block;
margin-bottom:4px;
margin-right:0px !important;
height:2px;`

const Buttonl = styled.button`
width: 204px;
height: 49px;
background: #ffffff;
color:#4D9FFF;
border-radius: 50px;
border:2px solid  #4D9FFF;
font-family: 'Cinzel', serif;
font-style: normal;
font-weight: normal;
font-size: 22px;
line-height: 27px;
margin-left:20px;
margin-bottom:18px;
margin-top:18px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
transition: all 500ms;
&:hover{
    transform: translateY(-7px);
    transition: all 500ms;
}
`;

class Createclass extends React.Component{
        constructor(props){
            super(props);
            this.state={
                _prof:"",
                _date:"",
                _subject:"",
                _class:"",
                _next:true,
                _students:[],
                _secance:[],
            }
        }


        profChange =e =>{
            this.setState({
                _prof:e.target.value,
            })
        }

        dateChange = e=>{
            this.setState({
                _date:e.target.value,
            })
        }
        subjectChange=e=>{
            this.setState({
                _subject:e.target.value,
            })
        }
        classChange =e=>{
            this.setState({
                _class:e.target.value,
            })
        }
        next=e=>{
            axios.get('http://127.0.0.1:8090/api/students/all')
              .then(response => {console.log(response);this.setState({
                _students:response.data,
    
            })});

            this.setState({
                _next:false,
            })
        }

        absent (data){
            
            this.setState({
                _secance:[...this.state._secance,{id:data}]
            })
            console.log(this.state._secance);
            
        }
        createTasks = (item,index) => {
            return(
                <tr key="index">
                <td>{index+1}</td>
                <td>{item.fname}</td>
                <td>{item.lname}</td>
                <td>{item.abs+" absence"} {item.abs===0?<Lineg><hr/></Lineg>:item.abs<10?<Liney><hr/></Liney>:<Liner><hr/></Liner>}</td>
                <td>{item.cne}</td>
                <td><input type="checkbox" className="chek" onClick={e=>{this.absent(item.id)}} ></input></td>
                </tr>
            )
        }

        send= e=>{
            e.preventDefault() ;
            const url = 'http://localhost:8090/api/seance';
            this.state._secance.forEach(element => {
              const formData = {date:this.state._date,prof :this.state._prof,student_id:element.id,subject:this.state._subject,class_id:this.state._class};
             axios.post(url,formData)
                    .then(response => {
                      console.log(response);  
                    })
                    
            });
        }

render(){
    const listItems = this.state._students.map(this.createTasks);
    return(
        <React.Fragment>
            <AuthNav/>
              <Container>
                  <br/>
                  {this.state._next?
                    <Row className="creat">
                        <Col md="6" className="half-create img-fluid">
                            <img src={create}  className="img-fluid" alt=""/>
                        </Col>
                        <Col md="6">
                           <Title> <h1>Create Class</h1> </Title>
                          <Line> <div></div></Line>
                        <Form className="pt-md-4 pl-md-4" onSubmit={this.onFormSubmit}>
                           <Row> 
                        <Col md="6">
                        <Form.Group controlId="formBasicfName">
                            <Form.Label><Label>Nom de prof</Label></Form.Label>
                            <Form.Control type="text" onChange={this.profChange} className="inpu" placeholder="Email" />
                        </Form.Group>
                        </Col>
                       
                        <Col md="6">
                        <Form.Group controlId="formBasiclName">
                            <Form.Label><Label>Date</Label></Form.Label>
                            <Form.Control type="date" onChange={this.dateChange} className="inpu" placeholder="PassWord"/>
                        </Form.Group>
                        </Col>
                        <Col md="6">
                        <Form.Group controlId="formBasiclName">
                            <Form.Label><Label>Class</Label></Form.Label>
                            <select className="custom-select"  onChange={this.classChange}>
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
                        <Col md="6">
                        <Form.Group controlId="formBasiclName">
                            <Form.Label><Label>Subject</Label></Form.Label>
                            <Form.Control type="text" onChange={this.subjectChange} className="inpu" placeholder=""/>
                        </Form.Group>
                        </Col>
                        <Button onClick={this.next} >Create</Button>
                        </Row>
                        </Form>
                        </Col>
                  </Row>: <div className="decorateTable">
            <Container>
                <Row>
                    <Col md="6">
                    <Tex> List of Students  <i className="fa fa-arrow-right" aria-hidden="false"></i>  </Tex> 
                   
                    </Col>
                    </Row>
            <Table striped bordered hover variant="dark" className="tb">
            <thead>
                <tr>
                <th>#</th>
                <th> <Head>First Name</Head></th>
                <th><Head>Last Name</Head></th>
                <th><Head>Total of Absence</Head></th>
                <th><Head>CNE</Head></th>
                <th><Head>Absent</Head></th>
                </tr>
            </thead>
            <tbody>
               {/* this project is created by Abdellatif ahammad and Mahmoud Zakaria Aymen El-khazinty */}
                
               {listItems}
            </tbody>
           
            </Table>
            <Buttonl onClick={this.send}>Confirm</Buttonl>
            </Container>
            </div>}
                    </Container>
        </React.Fragment>
    );
}

}

export default Createclass;