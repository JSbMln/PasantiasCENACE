import React from "react";
import Navbar from "C:/Users/PC2/Documents/Desarrollo Web/Cenace/pagina1/src/components/barras_de_navegacion/navbar.jsx";
import Infomapa from "C:/Users/PC2/Documents/Desarrollo Web/Cenace/pagina1/src/components/infomapa.jsx";
import Graficodem from "C:/Users/PC2/Documents/Desarrollo Web/Cenace/pagina1/src/components/graficodem.jsx";
import Grafbarra from "C:/Users/PC2/Documents/Desarrollo Web/Cenace/pagina1/src/components/grafbarra.jsx";
import Grafcol from "C:/Users/PC2/Documents/Desarrollo Web/Cenace/pagina1/src/components/grafcolumnas.jsx";

function Pagina1() {
  return (
    <React.Fragment>
      <Navbar />
      <Infomapa />
      <table style={{ borderCollapse: "collapse" }}>
        <tr>
          <td>
            <Graficodem />
          </td>
          <td>
            <Grafbarra />
          </td>
          <td>
            <Grafcol />
          </td>
        </tr>
      </table>
    </React.Fragment>
  );
}

export default Pagina1;
