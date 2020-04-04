import React from "react";

const Grafico = () => {
  return (
    <div style={{ border: "solid 2px lightblue" }}>
      <span>Demanda Nacional del Ecuador</span>
      <button style={{ float: "right" }}>+ info</button>
      <div
        style={{ backgroundColor: "black", width: "100%", height: "350px" }}
      ></div>
      <ul style={{ listStyleType: "none", float: "right" }}>
        <li>
          <button style={{ padding: "10px 10px" }}>Descargar</button>
        </li>
        <li>
          <button style={{ padding: "10px 10px" }}>Actualizar</button>
        </li>
      </ul>
    </div>
  );
};

export default Grafico;
