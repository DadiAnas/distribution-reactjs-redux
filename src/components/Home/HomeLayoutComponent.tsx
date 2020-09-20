import React from "react";
import { Layout } from "antd";
import NavbarComponent from "./NavbarComponent";
import MenuComponent from "./MenuComponent";
import "../css/Layout.css";

function HomeLayoutComponent(children: any) {
  return (
    <Layout>
      <NavbarComponent />
      <MenuComponent {...children} />
    </Layout>
  );
}

export default HomeLayoutComponent;
