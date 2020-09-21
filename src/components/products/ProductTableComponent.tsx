import { Button } from "antd";
import Table, { ColumnProps } from "antd/lib/table";
import {
  SearchOutlined,
  DeleteOutlined,
  BarsOutlined,
  EditOutlined,
} from "@ant-design/icons";
import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import { deleteOne } from "../../redux/actions/models";
import { useDispatch, useSelector } from "react-redux";
import "../css/ProductTableStyle.css";
import { Link } from "react-router-dom";
import ProductEditModalComponent from "./ProductEditModalComponent";

function ProductTableComponent({ products }: any) {
  const dispatch = useDispatch();
  const [visible, showEditModal] = useState(false);
  const [productToEdit, setProductToEdit] = useState({});

  const columns: ColumnProps<any>[] = [
    {
      title: "Designation",
      dataIndex: "designation",
      key: "designation",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "description",
    },
    {
      title: "Actions",
      dataIndex: "action",
      key: "action",
      render: (cell, product, index) => (
        <>
          <div className="actionButtons">
            {/* <Link to={`/products/${product.id}`}>
              <Button>
                <BarsOutlined />
              </Button>
            </Link> */}
            <Button
              onClick={() => {
                showEditModal(!visible);
                setProductToEdit(product);
              }}
            >
              <EditOutlined className="product-table-EditOutlined" />
            </Button>
            <Button
              danger
              onClick={() => dispatch(deleteOne("products", product.id))}
            >
              <DeleteOutlined />
            </Button>
          </div>
        </>
      ),
    },
  ];
  return (
    <>
      <Table columns={columns} dataSource={products || []} rowKey="id" />
      <ProductEditModalComponent
        productToEdit={productToEdit}
        showModal={showEditModal}
        visible={visible}
      />
    </>
  );
}

export default ProductTableComponent;
