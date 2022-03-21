import React from 'react'
import Button from '../UI/Button'
import NavBar from '../UI/NavBar' 
import Input from '../UI/Input' 
import {Form} from 'react-bootstrap'
import Login from '../login'
function Main() {
    const menu = ['menu1','menu2',[
        {name:'Menu3'},
        {name:'sousMenu1'},
        {name:'sousMenu2'},
        {name:'sousMenu3'}
    ]]
  return (
    <div>
        <NavBar menu={menu}/> 
        <Form>
        <Input 
        type='file' placeholder='avatar' 
        className='form-controls' label='avatar' />   
        <Input 
        type='text' placeholder='username' 
        className='form-controls' label='username' />      
        <Input 
        type='text' placeholder='email' 
        className='form-controls' label='email' />      
        <Input 
        type='password' placeholder='password' 
        className='form-controls' label='password' />           
            <div className='d-flex justify-content-center'>
                <Button className='m-3'variant='danger' name= 'reset'/>         
                <Button className='m-3'variant='success' name='envoyer'/> 
            </div> 
        </Form>   
        <Login/>         
    

    </div>
  )
}

export default Main