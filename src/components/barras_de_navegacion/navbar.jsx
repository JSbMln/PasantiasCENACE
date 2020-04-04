import React from "react";
import cenace from "../imagenes/cenace.jpg";

const Navbar = () => {
  return (
    <div style={{ backgroundColor: "#3B3B3B", height: "45px" }}>
      <ul style={{ listStyleType: "none" }}>
        <li style={{ float: "left" }}>
          <a style={{ color: "white", textDecoration: "initial" }} href="/">
            {" "}
            Información nacional de distribución
          </a>
        </li>
        <li>
          <img
            style={{
              width: "10%",
              height: "10%",
              float: "right",
            }}
            src={cenace}
            alt=""
          />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
