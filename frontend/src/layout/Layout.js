import React,{ useState, useEffect } from 'react';
import { BrowserRouter as Router, withRouter} from 'react-router-dom';
import {Nav, Navbar, Form, FormControl, Container,} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";


function Layout(props) {

    const children = props.children;

    return(
       
        <div>
        <Navbar bg="light" variant="light" expand="md" fixed="top">
            <Container>
            <LinkContainer to="/">
                <Navbar.Brand>Blog</Navbar.Brand>
            </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/admin/new"><Nav.Link>+ New Blog</Nav.Link></LinkContainer>
                    <LinkContainer to="#"><Nav.Link>❤ Favorites</Nav.Link></LinkContainer>
                    <LinkContainer to="#"><Nav.Link> 🗏 List</Nav.Link></LinkContainer>
                </Nav>
                <Form inline className="mr-auto">
                    <FormControl type="text" placeholder="&#128269; Search" className="mr-sm-3" size="sm" />
                </Form>
                           
                </Navbar.Collapse>
            </Container>
            
        </Navbar>
        <Container>
            <span style={{padding:10 }}></span>
            {props.children}
        </Container>
        
      </div>
     
    )
}

export default withRouter(Layout);