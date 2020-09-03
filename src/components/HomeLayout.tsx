import React, { useState } from "react";
import NGCLogo from "../components/svgs/NGCLogo";
import { Link, useLocation } from "react-router-dom";
import {
  Form,
  Modal,
  Layout,
  Menu,
  Breadcrumb,
  Card,
  Col,
  Row,
  Input,
  Button,
} from "antd";
import { SettingFilled, ReadOutlined, TeamOutlined } from "@ant-design/icons";
import HomeBreadCrumbs from "./HomeBreadCrumbs";

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
      <Header className="nav">
        <NGCLogo />
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
          >
            <Menu.Item
              key="home"
              style={{ color: "rgba(0, 0, 0, 0.65)" }}
              icon={
                <ReadOutlined style={{ color: "rgba(206, 47, 142, 0.61)" }} />
              }
            >
              <Link to="/home">Products</Link>
            </Menu.Item>
            <Menu.Item
              key="filieres"
              style={{ color: "rgba(0, 0, 0, 0.65)" }}
              icon={
                <TeamOutlined style={{ color: "rgba(206, 47, 142, 0.61)" }} />
              }
            >
              <Link to="/categories">Categories</Link>
            </Menu.Item>
            <Menu.Item
              key="settings"
              icon={
                <SettingFilled style={{ color: "rgba(206, 47, 142, 0.61)" }} />
              }
              style={{ color: "rgba(0, 0, 0, 0.65)" }}
            >
              <Link to="/settings">Settings</Link>
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
