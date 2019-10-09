import React, { Component } from 'react';
import  './Components.css'
import { Nav } from 'react-bootstrap'




class NavBar extends Component {
    state = {}
    render() {
        return (
            <>
                <Nav className="justify-content-start pl-5 Nav" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link className='Link' href="/home">ADD A STUDENT</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='Link' eventKey="link-1">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='Link' eventKey="link-2">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='Link' eventKey="link-3">Link</Nav.Link>
                    </Nav.Item>
                </Nav>
            </>
        );
    }
}

export default NavBar;

