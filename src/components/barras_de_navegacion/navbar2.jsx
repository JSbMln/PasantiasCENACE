import React from "react";
import cenace from "../imagenes/cenace.jpg";

const Navbar2 = () => {
  return (
    <div style={{ border: "solid 1px black", height: "50px" }}>
      <ul style={{ listStyleType: "none" }}>
        <li style={{ float: "left" }}>
          <a
            href="/"
            style={{
              padding: "10px 10px",
              textDecoration: "none",
              color: "blue",
            }}
          >
            Pronóstico de la demanda en tiempo real
          </a>
        </li>
        <li style={{ float: "left" }}>
          <a
            href="#nacional"
            style={{
              padding: "10px 10px",
              textDecoration: "none",
              color: "gold",
            }}
          >
            Nacional
          </a>
        </li>
        <li style={{ float: "left" }}>
          <a
            href="#eeq"
            style={{
              padding: "10px 10px",
              textDecoration: "none",
              color: "gold",
            }}
          >
            EE Quito
          </a>
        </li>
        <li style={{ float: "left" }}>
          <a
            href="#cnel"
            style={{
              padding: "10px 10px",
              textDecoration: "none",
              color: "gold",
            }}
          >
            CNEL Guayaquil
          </a>
        </li>
        <li style={{ float: "left" }}>
          <a
            href="#csur"
            style={{
              padding: "10px 10px",
              textDecoration: "none",
              color: "gold",
            }}
          >
            Centro Sur
          </a>
        </li>
        <li style={{ float: "left" }}>
          <a
            href="#ambato"
            style={{
              padding: "10px 10px",
              textDecoration: "none",
              color: "gold",
            }}
          >
            EE Ambato
          </a>
        </li>
        <li style={{ float: "right" }}>
          <img
            style={{
              float: "right",
              width: "20%",
              height: "20%",
            }}
            src={cenace}
            alt=""
          />
        </li>
      </ul>
    </div>
  );
};

export default Navbar2;
