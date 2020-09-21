import React, { useEffect } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "@ant-design/compatible/assets/index.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAll } from "../redux/actions/models";
import { useParams } from "react-router-dom";
import { RequestQueryBuilder } from "@nestjsx/crud-request";
import HomeLayoutComponent from "../components/Home/HomeLayoutComponent";
import ProductTableComponent from "../components/products/ProductTableComponent";
import "../components/css/ProductTableStyle.css";

function CategoryProductsPage() {
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
      <div className="search-div">
        <Input
          placeholder="Search"
          className="searchbar"
          prefix={<SearchOutlined />}
        />
      </div>
      <div className="site-card-wrapper">
        {products && <ProductTableComponent {...products} />}
      </div>
    </HomeLayoutComponent>
  );
}

export default CategoryProductsPage;
