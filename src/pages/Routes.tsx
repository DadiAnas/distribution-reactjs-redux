import React from "react";
import { Switch, Route } from "react-router-dom";
import CategorieListProduct from "../components/productsManagment/categoriesManagment/CategorieListProduct";
import Categories from "../components/productsManagment/categoriesManagment/Categories";

import Home from "./Home";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/products">
        <Home />
      </Route>
      <Route exact path="/categories">
        <Categories />
      </Route>
      <Route exact path="/categories/:categorieId/products">
        <CategorieListProduct />
      </Route>
    </Switch>
  );
}

export default Routes;
