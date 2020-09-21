import React, { useState } from "react";
import { Card, Row } from "antd";
import { Link } from "react-router-dom";
import ProductCardDropDownComponent from "./ProductCardDropDownComponent";
import Column from "antd/lib/table/Column";
import "../css/ProductsCardStyle.css";

function ProductCardComponent(products: any) {
  const { designation, id, picture } = products;

  return (
    <div>
      <Row>
        <Column align="center" key="0"></Column>
      </Row>
      <Card
        bordered
        hoverable
        className="product-card"
        cover={
          <Link to={"/products/" + id}>
            <img
              className="product-img"
              alt=""
              src={require("../img/" + picture)}
            />
          </Link>
        }
      >
        <div className="product-card-title">{designation}</div>
        <div className="product-card-dropdown">
          <ProductCardDropDownComponent {...products} />
        </div>
      </Card>
    </div>
  );
}

export default ProductCardComponent;
