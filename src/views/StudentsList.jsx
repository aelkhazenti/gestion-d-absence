import React from 'react';
import styled from 'styled-components';
import axios, { post } from 'axios';
import {Table, Container,Row,Col} from 'react-bootstrap';
import create from '../assets/img/create.png';

import AuthNav from '../components/Navbars/AuthNav'
const Head = styled.p`
color: rgb(143, 201, 255);
font-size:16px;
text-align:center;
font-family: 'Cormorant Garamond', serif;`;
const Tex = styled.p`
color:black;
font-size:28px;
font-family: 'Cormorant Garamond', serif;`;

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
class StudentsList extends React.Component{

    constructor(props) {
      
        super(props);
        this.state ={
          _students:[],
          line:0,

        }
        // this.onFormSubmit = this.onFormSubmit.bind(this)
        // //this.onChange = this.onChange.bind(this)
        // this.fileUpload = this.fileUpload.bind(this)
      };

      componentWillMount() {
        axios.get('http://127.0.0.1:8090/api/students/all')
          .then(response => {console.log(response);this.setState({
            _students:response.data,

        })});
        
        
      }


      createTasks = (item,index) => {
        return(
            <tr key="index">
            <td>{index+1}</td>
            <td>{item.fname}</td>
            <td>{item.lname}</td>
        <td>{item.abs+" absence"} {item.abs===0?<Lineg><hr/></Lineg>:item.abs<10?<Liney><hr/></Liney>:<Liner><hr/></Liner>}</td>
            <td>{item.cne}</td>
            </tr>
        )
    }

    render(){

        const listItems = this.state._students.map(this.createTasks);

        return(
            <React.Fragment>
                <AuthNav/>
                <br/><br/><br/>
                <div className="decorateTable">
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
                </tr>
            </thead>
            <tbody>
               {listItems}
            </tbody>
            </Table>
            </Container>
            </div>
            </React.Fragment>
        );
    }
}

export default StudentsList;