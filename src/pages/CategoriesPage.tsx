import React, { useEffect, useState } from "react";
import HomeLayoutComponent from "../components/Home/HomeLayoutComponent";
import "../components/css/CategoriesPageStyle.css";
import CategoriesTableComponent from "../components/categories/CategoriesTableComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchAll } from "../redux/actions/models";
import PlusButton from "../components/svgs/PlusButton";
import CategoriesCreateModalComponent from "../components/categories/CategoriesCreateModalComponent";

function Categories() {
  const [visible, showModal] = useState(false);
  const dispatch = useDispatch();
  const categories: any = useSelector(
    (state: any) => state.models["categories"]
  );
  useEffect(() => {
    dispatch(fetchAll("categories"));
  }, []);

  return (
    <HomeLayoutComponent>
      <div className="site-card-wrapper">
        {categories && <CategoriesTableComponent categories={categories} />}
      </div>
      <div className="footer">
        <PlusButton showModal={() => showModal(!visible)} />
      </div>
      <CategoriesCreateModalComponent visible={visible} showModal={showModal} />
    </HomeLayoutComponent>
  );
}

export default Categories;
