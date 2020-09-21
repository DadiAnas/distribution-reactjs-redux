import React, { useEffect, useState } from "react";
import { fetchAll } from "../redux/actions/models";
import { useDispatch, useSelector } from "react-redux";
import HomeLayoutComponent from "../components/Home/HomeLayoutComponent";
import PlusButton from "../components/svgs/PlusButton";
import ProductCreateModalComponent from "../components/products/ProductCreateModalComponent";
import "../components/css/products.css";
import ProductTableComponent from "../components/products/ProductTableComponent";

function ProductsPage() {
  const [visible, showModal] = useState(false);
  const dispatch = useDispatch();
  const products: any = useSelector((state: any) => state.models["products"]);
  useEffect(() => {
    dispatch(fetchAll("products"));
  }, []);

  return (
    <HomeLayoutComponent>
      <div className="site-card-wrapper">
        {products && <ProductTableComponent products={products} />}
      </div>
      <div className="footer">
        <PlusButton showModal={() => showModal(!visible)} />
      </div>
      <ProductCreateModalComponent visible={visible} showModal={showModal} />
    </HomeLayoutComponent>
  );
}

export default ProductsPage;

{
  /* <Row gutter={[48, 24]}>
          {products &&
            products.map((products: any) => (
              <Col
                key={products.id}
                className="gutter-row"
                sm={24}
                md={12}
                lg={8}
                xl={8}
              >
                { <ProductCardComponent {...products} /> }
              </Col>
            ))}
        </Row> */
}
