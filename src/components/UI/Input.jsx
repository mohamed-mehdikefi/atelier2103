import React from 'react'
import {InputGroup,FormControl} from 'react-bootstrap'

function Input({type,placeholder,className,label}) {
  return (
    <div>
    <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">{label}</InputGroup.Text>
    <FormControl
      placeholder={placeholder}
      type={type}
      className={className}
     
    />
  </InputGroup>
    </div>
  )
}

export default Input