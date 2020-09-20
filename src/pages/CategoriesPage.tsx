import React from "react";
import HomeLayoutComponent from "../components/Home/HomeLayoutComponent";
import "../components/css/Categories.css";
import CategoriesTableComponent from "../components/categories/CategoriesTableComponent";

function Categories() {
  return (
    <HomeLayoutComponent>
      <div className="site-card-wrapper">
        <CategoriesTableComponent />
      </div>
    </HomeLayoutComponent>
  );
}

export default Categories;
