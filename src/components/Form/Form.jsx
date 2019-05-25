import React from 'react';
import './Form.scss';
import { Form as ReactstrapForm, FormGroup, Input } from 'reactstrap';

const Form = ({ onChange, search, placeholder, name, id, type }) => {
  return (
    <ReactstrapForm autoComplete="off" className='react-form'>
      <FormGroup>
        <Input
          type={type}
          name={name} id={id}
          placeholder={placeholder}
          value={search}
          className='react-input'
          onChange={onChange}
        />
      </FormGroup>
    </ReactstrapForm>
  );
};

export default Form;
