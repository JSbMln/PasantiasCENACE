import React from "react";
import Navbar from "./components/barras_de_navegacion/navbar";
import Infomapa from "./components/infomapa";
import Graficodem from "./components/graficodem";
import Grafbarra from "./components/grafbarra";
import Grafcol from "./components/grafcolumnas";

function App() {
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

export default App;
