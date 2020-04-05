import React from "react";
import cenace from "../components/imagenes/cenace.jpg";

const Logohome = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img src={cenace} alt="" />
      <h1>Operador Nacional de Electricidad</h1>
      <h1>CENACE</h1>
    </div>
  );
};

export default Logohome;
