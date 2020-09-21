import React from "react";
import { Layout } from "antd";
import Logo from "../svgs/Logo";
import "../css/NavStyle.css";

const { Header } = Layout;

function NavbarComponent() {
  return (
    <Header className="nav" style={{ backgroundColor: "white" }}>
      <Logo />
    </Header>
  );
}

export default NavbarComponent;
