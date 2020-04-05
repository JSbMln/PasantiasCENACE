import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import cenace from "../imagenes/cenace.jpg";

const NavbarDark = (props) => {
  const navdata = props.navdata;
  return (
    <Navbar bg={navdata.color} variant="dark">
      <Navbar.Brand href={navdata.brandlink}>{navdata.brandname}</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href={navdata.link1}>{navdata.name1}</Nav.Link>
        <Nav.Link href={navdata.link2}>{navdata.name2}</Nav.Link>
      </Nav>
      <Image src={cenace} height={50} />
    </Navbar>
  );
};

export default NavbarDark;
