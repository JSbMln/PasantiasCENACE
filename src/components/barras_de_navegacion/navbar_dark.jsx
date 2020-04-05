import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import cenace from "../imagenes/cenace.jpg";

const NavbarDark = (props) => {
  const { navdata, brand } = props;
  return (
    <Navbar bg={props.color} variant="dark">
      <Navbar.Brand href={brand.ruta}>{brand.name}</Navbar.Brand>
      <Nav className="mr-auto">
        {navdata.map((c) => (
          <Nav.Link key={c.id} href={c.ruta}>
            {c.name}
          </Nav.Link>
        ))}
      </Nav>
      <Image src={cenace} height={50} />
    </Navbar>
  );
};

export default NavbarDark;
