import React, { useState } from 'react';
import './Header.scss';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import Dropdown from '../Dropdown/Dropdown';
import Form from '../Form/Form';

const Header = ({ title, searchFn, search }) => {

  const [isOpen, setOpen] = useState(false);
  const opciones = {
    hombre: [
      { id: 1, name: 'Jeans' },
      { id: 2, name: 'Remeras' }
    ],
    mujer: [
      { id: 1, name: 'Jeans' },
      { id: 2, name: 'Remeras' }
    ]
  };


  return (
    <div className="navbar-component">
      <Navbar light expand="md">
        <NavbarBrand href="/">{title}</NavbarBrand>
        <NavbarToggler onClick={() => setOpen(!isOpen)}/>
        <Collapse isOpen={isOpen} navbar className='collapseContainer'>
          <Nav className="ml-auto" navbar>
            <Dropdown title="Hombre" opciones={Object.values(opciones.hombre)}/>
            <Dropdown title="Mujer" opciones={Object.values(opciones.mujer)}/>
            <NavItem className="navItem">
              <NavLink href="#">Contacto</NavLink>
            </NavItem>
            <Form
              search={search}
              placeholder='Search...'
              name="search"
              type="text"
              onChange={e => {
                e.preventDefault();
                searchFn(e.target.value);
              }}
            />
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
