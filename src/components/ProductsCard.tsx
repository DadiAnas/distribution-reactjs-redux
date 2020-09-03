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
function ProductsCard(cours: any) {
  const { title, id, anneScolaire } = cours;
  return (
    <Card
      bordered={true}
      hoverable
      style={{
        width: 220,
        height: 190,
        borderRadius: "40px",
        backgroundColor: "#FFF9FE",
        textAlign: "center",
      }}
      cover={
        <Link to={"/module/" + id}>
          <img
            style={{
              width: "220px",
              height: "127px ",
              borderRadius: "17px 17px 0 0",
            }}
            alt="example"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQoP11vlBYn6os4qDxjt4vaPjOlN1QMspzU9tdZUL0euLemlWIh&usqp=CAU"
          />
        </Link>
      }
    >
      <div
        style={{
          display: "inline-block",
          textAlign: "center",
          fontSize: 11,
          fontWeight: "bold",
        }}
      >
        {title}
      </div>
      <div style={{ display: "inline-block", float: "right" }}>
        <DropDownProduct cours={cours} />
      </div>
    </Card>
  );
}

export default ProductsCard;
