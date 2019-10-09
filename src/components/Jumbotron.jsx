import React, { Component } from 'react';
import './Components.css'
import { Container } from 'react-bootstrap'



class Jumbotron1 extends Component {
    state = {}
    render() {
        return (
        
            <Container fluid className='Container p-5'>
                <div className="row">
                    <div className="col-12 col-sm-8 col-md-8">
                <h1>
                  WHAT YOU CAN DO WITH THIS APP? 
              </h1>
             
                  <ul>
                      <li>Add a Student</li>
                      <li>Add a Project For Each Student</li>
                      <li>Show For Each Student Projects</li>
                  </ul>
                  </div>
                  <div className="col-12 col-sm-4 col-md-4 ">
                      <img className="img-fluid" style={{width:"25rem"}} src="https://i.ibb.co/hV4ptzm/persona1.png"/>
                  </div>
                  </div>
              
            </Container>
       );
    }
}

export default Jumbotron1;