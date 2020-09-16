import React, { useState } from "react";
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
import { Link } from "react-router-dom";
import DropDownProduct from "./DropDownProduct";
import Column from "antd/lib/table/Column";
function ProductsCard(products: any) {
  const { designation, id, description, price, picture } = products;
  return (
    <div>
      <Row>
        <Column align="center" key="0"></Column>
      </Row>
      <Card
        bordered={true}
        hoverable
        style={{
          width: 220,
          height: 190,
          borderRadius: "40px",
          backgroundColor: "#FFDFAF",
          textAlign: "center",
        }}
        cover={
          <Link to={"/products/" + id}>
            <img
              style={{
                width: "220px",
                height: "140px ",
                borderRadius: "17px 17px 0 0",
              }}
              alt=""
              src={require("./img/" + picture)}
            />
          </Link>
        }
      >
        <div
          style={{
            display: "inline-block",
            textAlign: "center",
            fontSize: 20,
            fontWeight: "normal",
            marginTop: -10,
          }}
        >
          {designation}
        </div>
        <div
          style={{ display: "inline-block", float: "right", color: "orange" }}
        >
          <DropDownProduct {...products} />
        </div>
      </Card>
    </div>
  );
}

export default ProductsCard;
