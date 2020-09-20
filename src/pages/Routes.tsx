import React from "react";
import { Switch, Route } from "react-router-dom";
import CategoryProductComponent from "../components/categories/CategoryProductsComponent";
import CategoriesPage from "./CategoriesPage";
import HomePage from "./HomePage";
import ProductsPage from "./ProductsPage";
import SettingsPage from "./SettingsPage";

function Routes() {
  return (
    <Switch>
      <Route exact path="/products">
        <ProductsPage />
      </Route>
      <Route exact path="/categories">
        <CategoriesPage />
      </Route>
      <Route exact path="/categories/:categorieId/products">
        <CategoryProductComponent />
      </Route>
      <Route exact path="/settings">
        <SettingsPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  );
}

export default Routes;
