import React, { useEffect } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "../css/ProductList.css";
import "@ant-design/compatible/assets/index.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAll } from "../../redux/actions/models";
import { useParams } from "react-router-dom";
import { RequestQueryBuilder } from "@nestjsx/crud-request";
import HomeLayoutComponent from "../Home/HomeLayoutComponent";
import ProductTableComponent from "../products/ProductTableComponent";

function CategoryProductsComponent() {
  const dispatch = useDispatch();
  const products: any = useSelector((state: any) => state.models["products"]);
  const { categorieId } = useParams();
  useEffect(() => {
    const qb = RequestQueryBuilder.create();
    qb.setFilter({
      field: "categories.id",
      operator: "$eq",
      value: categorieId,
    });
    dispatch(fetchAll("products", qb.query()));
  }, []);

  return (
    <HomeLayoutComponent>
      <div style={{ paddingBottom: "55px", position: "sticky" }}>
        <Input
          placeholder="Search"
          className="searchbar"
          prefix={<SearchOutlined />}
        />
      </div>
      <ProductTableComponent {...products} />
    </HomeLayoutComponent>
  );
}

export default CategoryProductsComponent;
