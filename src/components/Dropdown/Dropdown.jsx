import React from 'react';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';


const Dropdown = ({ title, opciones }) => (
  <>
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        {title}
      </DropdownToggle>
      <DropdownMenu right>
        {opciones.map(opcion => (
          <DropdownItem key={opcion.id}>
            {opcion.name}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </UncontrolledDropdown>
  </>
);

export default Dropdown;
