import React, { Component } from "react";
import NavbarDark from "../components/barras_de_navegacion/navbar_dark";
import Logohome from "../components/logohome";

class Home extends Component {
  state = {
    brand: { ruta: "/", name: "Inicio" },
    navdata: [
      { ruta: "/pagina1", name: "Demanda Nacional" },
      { ruta: "/pagina2", name: "Pronóstico" },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <NavbarDark
          color="dark"
          brand={this.state.brand}
          navdata={this.state.navdata}
        />
        <Logohome />
      </React.Fragment>
    );
  }
}

export default Home;
