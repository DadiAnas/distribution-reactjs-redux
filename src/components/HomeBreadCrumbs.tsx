import React from "react";
import { Breadcrumb } from "antd";
import { useLocation, useParams, Link } from "react-router-dom";

function HomeBreadCrumbs() {
  const location = useLocation();
  const paths = location.pathname.split("/");
  const { filierId } = useParams();
  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      {paths.includes("home") && <Breadcrumb.Item>Products</Breadcrumb.Item>}
      {paths.includes("categories") && (
        <Breadcrumb.Item>
          <Link to={"/categories"}>Categories</Link>
        </Breadcrumb.Item>
      )}
      {paths.includes("categories") && (
        <Breadcrumb.Item>{filierId}</Breadcrumb.Item>
      )}
      {paths.includes("settings") && (
        <Breadcrumb.Item>Settings</Breadcrumb.Item>
      )}
    </Breadcrumb>
  );
}

export default HomeBreadCrumbs;
