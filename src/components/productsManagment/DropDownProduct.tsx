import React, { useState } from "react";
import {
  Menu,
  Modal,
  Button,
  Popconfirm,
  Form,
  Input,
  Select,
  Dropdown,
  Upload,
  message,
} from "antd";
import {
  LoadingOutlined,
  PlusOutlined,
  SettingOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import "./../css/file.css";
import { useDispatch } from "react-redux";
import { deleteOne } from "../../redux/actions/models";
import EditProductsModal from "./EditProductsModal";

function DropDownProduct(products: any) {
  const { id } = products;
  const [visible, showEditModal] = useState(false);
  const { Option } = Select;
  const [image, setImage] = useState();
  const dispatch = useDispatch();

  const menu = (
    <Menu>
      <Menu.Item
        key="0"
        className="mydropdown"
        onClick={() => showEditModal(!visible)}
      >
        <EditOutlined style={{ color: "#e8501d" }} />
        Edit
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item
        key="1"
        className="mydropdown"
        onClick={() => dispatch(deleteOne("products", id))}
      >
        <DeleteOutlined style={{ color: "#e8501d" }} /> Delete
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
      <EditProductsModal
        productsToEdit={products}
        showModal={showEditModal}
        visible={visible}
      />
    </>
  );
}

export default DropDownProduct;
