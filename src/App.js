import React from 'react';
import './components/Components.css';
import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron'
import Card from './components/Card'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
     <NavBar/>
     <Jumbotron/>
     <Card/>
    </div>
  );
}

export default App;
