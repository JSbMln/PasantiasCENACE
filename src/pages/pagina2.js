import React from "react";
import Navbar2 from "C:/Users/PC2/Documents/Desarrollo Web/Cenace/pagina1/src/components/barras_de_navegacion/navbar2.jsx";
import Grafico from "C:/Users/PC2/Documents/Desarrollo Web/Cenace/pagina1/src/components/grafico.jsx";

function Pagina2() {
  return (
    <React.Fragment>
      <Navbar2 />
      <h4 style={{ backgroundColor: "gray" }}>Fecha</h4>
      <Grafico />
    </React.Fragment>
  );
}

export default Pagina2;
