import React, { Component } from "react";
import NavbarDark from "../components/barras_de_navegacion/navbar_dark";
import NavbarBlue from "../components/barras_de_navegacion/navbar_blue";
import NavbarLight from "../components/barras_de_navegacion/navbar_light";
import Logohome from "../components/logohome";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavbarDark />
        <NavbarBlue />
        <NavbarLight />
        <Logohome />
      </React.Fragment>
    );
  }
}

export default Home;
