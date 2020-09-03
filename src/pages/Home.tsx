import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import { fetchAll } from "../redux/actions/models";
import { useDispatch, useSelector } from "react-redux";
import HomeLayout from "../components/HomeLayout";
import ProductForm from "../components/CreateProductsModal";
import "../components/css/products.css";
import PlusButton from "../components/svgs/PlusButton";
import ProductsCard from "../components/ProductsCard";
import "../components/css/products.css";
import "@ant-design/compatible/assets/index.css";
import CreateProductsModal from "../components/CreateProductsModal";

function Home() {
  const [visible, showModal] = useState(false);
  const dispatch = useDispatch();
  const products: any = useSelector((state: any) => state.models["products"]);
  useEffect(() => {
    dispatch(fetchAll("products"));
  }, []);

  return (
    <HomeLayout>
      <div className="site-card-wrapper">
        <Row gutter={[48, 24]}>
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
                <ProductsCard {...products} />
              </Col>
            ))}
        </Row>
      </div>
      <div className="footer">
        <PlusButton showModal={() => showModal(!visible)} />
      </div>
      <CreateProductsModal visible={visible} showModal={showModal} />
    </HomeLayout>
  );
}

export default Home;
