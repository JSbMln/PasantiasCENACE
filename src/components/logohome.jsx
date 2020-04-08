import React from "react";
import cenace from "../components/imagenes/cenace.jpg";

const Logohome = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: "10%",
      }}
    >
      <img src={cenace} alt="" />
      <h1 className="myh1 h1">Operador Nacional de Electricidad</h1>
      <h1>CENACE</h1>
      <button className="myh1 btn btn-primary">Login</button>
    </div>
  );
};

export default Logohome;
