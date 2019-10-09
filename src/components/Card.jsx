import React, { Component } from 'react';
import './Components.css'
import {Card ,Button} from 'react-bootstrap'
import './Components.css'
import {connect} from 'react-redux'

const mapStateToProps = state =>{
  console.log(state)

  return state
}

const mapDispatchToProps = dispatch => {
  return{
 loading:()=>dispatch({type:'loading'}),
 lodingFinished:()=>dispatch({type:'loadingFinished'})}
}

class Card1 extends Component {
    constructor(props) {
        super(props);
        this.state = { students:[]};
    }
    render() {
        return ( 
        
     
            <div className="container w-100 ">
            <div className="row">
            {this.props.state && this.props.state.loading &&
     <div>
          STO CARICANDO
          </div>
          }
      {this.props.state && !this.props.state.loading && 
     <div>
          HO CARICANDO
          </div>
          }
          
            
        {this.state.students && this.state.students.map((student,index)=><div className="col-12 col-sm-12 col-md-6 col-lg-4 mt-3">
        <Card  key={student.studentid}>
        <Card.Img variant="top" src={student.image} className="img-fluid"/>
        <Card.Body className='Card'>
          <Card.Title>Student Info</Card.Title>
          <Card.Text>
          <ul>
          <li>{student.name}</li>
          <li>{student.surname}</li>
          <li>{student.email}</li>
          
          
          </ul>

          </Card.Text>
          <Button className='btn-primary'>Show Projects</Button>
        </Card.Body>
      </Card> 
        </div>
        )}
        </div>
        </div>
        );
    

  

      }

      componentDidMount = async() => {
        var response = await fetch("https://strivestudents.azurewebsites.net/students");
        var students = await response.json();
        this.setState({ students: students });
        console.log(this.state.students)
        this.props.loadingFinished()      
     };
}
 
export default connect(mapStateToProps , mapDispatchToProps)(Card1)