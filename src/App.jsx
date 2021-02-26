import React from 'react';
import './App.css';
import AuthNav from './components/Navbars/AuthNav' 
import Login from './views/login';
import Home from './views/home';
import Createclass from './views/createclass';
import StudentsList from './views/StudentsList';
import ClassesList from './views/ClassesList';
import Absecne from './views/Absence';
import AddStudent from './views/AddStudent';
import Footer from './components/Footers/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import ReactNotification from 'react-notifications-component'

function App() {
  return (
    <React.Fragment className="app-container">
      <ReactNotification/>
      {/* the routing */}
      <Router>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route path="/addStudent">
        <AddStudent/>
        </Route>
        <Route path="/login">
        <Login/>
        </Route>
        <Route path="/absence">
        <Absecne></Absecne>
        </Route>
       <Route path="/classList">
       <ClassesList></ClassesList>
       </Route>
        <Route path="/studentList">
          <StudentsList/>
        </Route>
        <Route path="/newClass">
        <Createclass/>
        </Route>
      </Router>
      <br/><br/><br/><br/><br/><br/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
