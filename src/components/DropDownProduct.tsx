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
import "./css/file.css";
import { useDispatch } from "react-redux";
import { deleteOne } from "../redux/actions/models";
import EditProductsModal from "./EditProductsModal";

function DropDownProduct({ cours }: any) {
  const { id } = cours;
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
        <EditOutlined />
        edit
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item
        key="1"
        className="mydropdown"
        onClick={() => dispatch(deleteOne("products", id))}
      >
        <DeleteOutlined /> delete
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
        coursToEdit={cours}
        showModal={showEditModal}
        visible={visible}
      />
    </>
  );
}

export default DropDownProduct;
