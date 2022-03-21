import React from 'react'
import{Container,Navbar,Nav,NavDropdown} from 'react-bootstrap'

function NavBar({menu}) {
    console.log(menu.length)
  return (
    <div>
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
          {menu?.map((el,key) => {
              if(key < menu.length-1){
                return ( <Nav.Link href="#home">{el}</Nav.Link>)
              }else{
                return (<NavDropdown title={el[0].name} id="basic-nav-dropdown">
                    {el.map((elem,key) => key > 0 ? <NavDropdown.Item href="#action/3.1">{elem.name}</NavDropdown.Item> : '' )}
                </NavDropdown>)
              }
          } )}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default NavBar