import React, { Component } from "react";
import NavbarDark from "../components/barras_de_navegacion/navbar_dark";
import Logohome from "../components/logohome";

class Home extends Component {
  state = {
    color: "dark",
    brandname: "Inicio",
    brandlink: "/",
    name1: "Demanda Nacional",
    link1: "/pagina1",
    name2: "Pronóstico",
    link2: "/pagina2",
  };
  render() {
    return (
      <React.Fragment>
        <NavbarDark navdata={this.state} />
        <Logohome />
      </React.Fragment>
    );
  }
}

export default Home;
