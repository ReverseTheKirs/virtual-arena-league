import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './App.css';
import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* ------- Navbar ------- */}
        <Navbar fixedTop inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">Virtual Arena League</a>
            </Navbar.Brand>
            <Navbar.Toggle />
            </Navbar.Header>

          <Navbar.Collapse>
            <Nav pullRight>
              <Navbar.Brand>
                <Link to="/">Tournaments</Link>
              </Navbar.Brand>
              <NavItem eventKey={1} href="#">
                Login
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes />
      </div>
    );
  }
}

export default App;
