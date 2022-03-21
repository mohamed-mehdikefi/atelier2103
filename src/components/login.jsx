import React from 'react'
import Button from './UI/Button'
import Input from './UI/Input' 
function login() {
  return (
    <div>
         <Input 
        type='text' placeholder='email' 
        className='form-controls' label='email' />      
        <Input 
        type='password' placeholder='password' 
        className='form-controls' label='password' />           
            <div className='d-flex justify-content-center'>                   
                <Button className='m-3'variant='primary' name='login'/> 
            </div> 

    </div>
  )
}

export default login