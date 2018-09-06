import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand } from 'reactstrap';

  class NavBar extends Component {

    render() {
      return (
        <div>
          <Navbar color="secondary" expand="md">
            <NavbarBrand href="/">Matilda</NavbarBrand>
          </Navbar>
        </div>
      );
    }
  }

  export default NavBar
