import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import cenace from "../imagenes/cenace.jpg";

const NavbarBlue = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/pagina1">Pagina 1</Nav.Link>
        <Nav.Link href="/pagina2">Pagina 2</Nav.Link>
      </Nav>
      <Image src={cenace} height={50} />
    </Navbar>
  );
};

export default NavbarBlue;
