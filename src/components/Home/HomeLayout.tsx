import React, { useState } from "react";
import Logo from "../svgs/Logo";
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import { SettingFilled, ReadOutlined, TeamOutlined } from "@ant-design/icons";
import HomeBreadCrumbs from "./HomeBreadCrumbs";
import "../css/Layout.css";
import SettingsSVG from "../svgs/settings";
import ExpandLeft from "../svgs/ExpandLeft";
import Bottle from "../svgs/Bottle";

const { Header, Content, Sider } = Layout;

function HomeLayout({ children }: any) {
  const [Collapsed, setCollapsed] = useState(false);

  const location = useLocation();

  const pathRoutes = location.pathname.split("/");

  const onCollapse = () => {
    setCollapsed(!Collapsed);
  };
  return (
    <Layout>
      <Header className="nav" style={{ backgroundColor: "white" }}>
        <Logo />
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{ background: "#fff" }}
          className="Sider"
          collapsedWidth="0"
          collapsible
          collapsed={Collapsed}
          onCollapse={onCollapse}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
            selectedKeys={pathRoutes}
            expandIcon={<ExpandLeft />}
          >
            <Menu.Item key="products" icon={<Bottle />}>
              <Link to="/products" style={{ position: "relative", left: 10 }}>
                Products
              </Link>
            </Menu.Item>
            <Menu.Item
              key="categories"
              style={{ color: "rgba(0, 0, 0, 0.65)" }}
              icon={<ReadOutlined style={{ color: "#e8501d" }} />}
            >
              <Link to="/categories">Categories</Link>
            </Menu.Item>
            <Menu.Item key="settings" icon={<SettingsSVG />}>
              <Link to="/settings" style={{ position: "relative", left: 10 }}>
                Settings
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <HomeBreadCrumbs />
          <Content className="menu">{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default HomeLayout;
