import React, { useState } from "react";
import { Menu, Select, Dropdown } from "antd";
import {
  SettingOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { deleteOne } from "../../redux/actions/models";
import ProductEditModalComponent from "./ProductEditModalComponent";
import "../css/ProductCardDropDownStyle.css";

function ProductCardDropDownComponent(products: any) {
  const { id } = products;
  const [visible, showEditModal] = useState(false);
  const dispatch = useDispatch();

  const menu = (
    <Menu>
      <Menu.Item
        key="0"
        className="product-card-dropdown-item"
        onClick={() => showEditModal(!visible)}
      >
        <EditOutlined style={{ color: "#e8501d" }} />
        Edit
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item
        key="1"
        className="product-card-dropdown-item"
        onClick={() => dispatch(deleteOne("products", id))}
      >
        <DeleteOutlined /> Delete
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link">
          <SettingOutlined />
        </a>
      </Dropdown>
      <ProductEditModalComponent
        productsToEdit={products}
        showModal={showEditModal}
        visible={visible}
      />
    </>
  );
}

export default ProductCardDropDownComponent;
