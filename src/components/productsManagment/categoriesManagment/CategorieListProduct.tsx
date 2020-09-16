import React, { useState, Component, useEffect } from "react";
import {
  Upload,
  message,
  Modal,
  Table,
  Dropdown,
  Input,
  Tag,
  Button,
  Menu,
  Breadcrumb,
  Form,
} from "antd";
import {
  SmallDashOutlined,
  SearchOutlined,
  UserDeleteOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import "./css/ProductList.css";
import "@ant-design/compatible/assets/index.css";
import { ColumnProps } from "antd/es/table";
import { useDispatch, useSelector } from "react-redux";
import { fetchAll, deleteOne, addOne } from "../../../redux/actions/models";
import { useParams } from "react-router-dom";
import { RequestQueryBuilder } from "@nestjsx/crud-request";
import PlusButton from "../../svgs/PlusButton";
import HomeLayout from "../../Home/HomeLayout";

let color = "";
let stat = "";
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
function CategorieListProduct() {
  const [isCreateModalVisible, showCreateModalVisible] = useState(false);

  const dispatch = useDispatch();
  const products: any = useSelector((state: any) => state.models["products"]);

  const { categorieId } = useParams();
  useEffect(() => {
    const qb = RequestQueryBuilder.create();
    qb.setFilter({
      field: "categories.id",
      operator: "$eq",
      value: categorieId,
    });
    dispatch(fetchAll("products", qb.query()));
  }, []);

  const myproducts: any = [];
  const getproducts = (products || []).map((user: any) => {
    myproducts.push(user);
  });
  console.log(products || []);
  const [visible, showModal] = useState(false);

  const [form] = Form.useForm();
  interface Product {
    key: number;
    designation: string;
    description: string;
    price: string;
    picture: number;
  }

  const More = ({ id }: any) => (
    <Menu>
      <Menu.Item
        className="mydropdown"
        onClick={() => showModal(!visible)}
        style={{ width: 100 }}
      >
        <UserSwitchOutlined />
        edit
      </Menu.Item>
      <Menu.Item
        className="mydropdown"
        onClick={() => dispatch(deleteOne("products", id))}
      >
        <UserDeleteOutlined /> delete
      </Menu.Item>
    </Menu>
  );

  const columns: ColumnProps<Product>[] = [
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
      render: (record, value: any) => {
        return (
          <Dropdown overlay={() => <More id={value.id} />}>
            <a className="ant-dropdown-link">
              <SmallDashOutlined />
            </a>
          </Dropdown>
        );
      },
    },
  ];
  return (
    <HomeLayout>
      <div style={{ paddingBottom: "55px", position: "sticky" }}>
        <Input
          placeholder="Search"
          className="searchbar"
          prefix={<SearchOutlined />}
        />
      </div>

      <Table columns={columns} dataSource={products || []} />
      <Modal
        title="Edit products"
        visible={visible}
        onCancel={() => showModal(false)}
        footer={[
          <Button form="myForm" key="creer" htmlType="submit">
            edit
          </Button>,
          <Button
            key="cancel"
            htmlType="button"
            onClick={() => showModal(false)}
          >
            cancel
          </Button>,
        ]}
      >
        <Form {...layout} form={form} name="control-hooks" id="myForm">
          <Form.Item
            name="designation"
            label="Designation"
            rules={[{ required: true }]}
          >
            <Input type="text" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true }]}
          >
            <Input type="password" />
          </Form.Item>
          <Form.Item
            name="confirm"
            label="Confirm"
            rules={[{ required: true }]}
          >
            <Input type="password" />
          </Form.Item>
        </Form>
      </Modal>
    </HomeLayout>
  );
}

function CreateProductModal({ showModal, visible }: any) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const addProduct = async () => {
    try {
      await form.validateFields();
      const products = {
        ...form.getFieldsValue(),
      };
      //dispatch(addOne("products",products))
      showModal(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Modal
      title="cree étudiant"
      visible={visible}
      onCancel={() => showModal(false)}
      footer={[
        <Button
          form="myForm"
          key="creer"
          htmlType="submit"
          onClick={addProduct}
        >
          creer
        </Button>,
        <Button key="cancel" htmlType="button" onClick={() => showModal(false)}>
          cancel
        </Button>,
      ]}
    >
      <Form {...layout} form={form} name="control-hooks" id="myForm">
        <Form.Item
          name="fullName"
          label="fullName"
          rules={[{ required: true }]}
        >
          <Input type="text" />
        </Form.Item>
        <Form.Item
          name="username"
          label="username"
          rules={[{ required: true }]}
        >
          <Input type="string" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true }]}
        >
          <Input type="password" />
        </Form.Item>
        <Form.Item
          name="password_confirmation"
          label="Confirm"
          rules={[{ required: true }]}
        >
          <Input type="password" />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default CategorieListProduct;
