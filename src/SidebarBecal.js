import React from "react";
import { withStyles } from "@material-ui/core/styles";
import "./Sidebar.css";
import { Button } from "@material-ui/core";

const ButtonSidebar = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    width: "200px",
    height: "40px",
    margin: "5px",
    backgroundColor: "#0ED956",
    color: "#fff",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "12px",
    lineHeight: "15px",
    borderRadius: "0",
    fontFamily: ["Oswald", "sans-serif", '"Apple Color Emoji"'].join(","),
    "&:hover": {
      color: "#fff",
      backgroundColor: "#BA1863",
    },
    "&:active": {
      boxShadow: "none",
    },
    "&:focus": {
      color: "#fff",
    },
  },
})(Button);

function SidebarBecal() {
  return (
    <div className="sidebar">
      <h3>Nuevo Becal</h3>
      <img
        src="https://www.gob.mx/cms/uploads/image/file/459326/nuevo_becal_7.jpg"
        alt="Becal"
        width="250px"
        height="200px"
      />
      <ButtonSidebar>Localización y delimitación del proyecto</ButtonSidebar>
      <ButtonSidebar>Índices de vegetación</ButtonSidebar>
      <ButtonSidebar>Concentración de carbono</ButtonSidebar>
      <ButtonSidebar>Ubicación de flora y fauna</ButtonSidebar>
      <ButtonSidebar>Localidades beneficiadas</ButtonSidebar>
    </div>
  );
}

export default SidebarBecal;
