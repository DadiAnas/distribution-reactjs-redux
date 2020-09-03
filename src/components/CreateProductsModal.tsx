import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Modal, Button, Select } from "antd";
import { addOne, fetchAll } from "../redux/actions/models";
import MultipleInputSelect from "./MultipleInputSelect";
import FormItem from "antd/lib/form/FormItem";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function CreateProductsModal({ showModal, visible }: any) {
  const [form] = Form.useForm();
  const { Option } = Select;
  const [products, setProducts] = useState({});
  const dispatch = useDispatch();
  const categories = useSelector((state: any) => state.models["categories"]);

  function handleAddCategories(filiers: []) {
    console.log(filiers);
    setProducts((products) => ({
      ...products,
      categories: categories?.map((f: any) => ({ id: f.value })),
    }));
  }
  useEffect(() => {
    dispatch(fetchAll("categories"));
  }, []);

  const addProduct = () => {
    dispatch(addOne("products", products));
    showModal(false);
  };

  return (
    <Modal
      title="Add product "
      visible={visible}
      onCancel={() => showModal(false)}
      footer={[
        <Button form="myForm" key="creer" onClick={addProduct}>
          Add
        </Button>,
        <Button key="cancel" htmlType="button" onClick={() => showModal(false)}>
          cancel
        </Button>,
      ]}
    >
      <Form {...layout} form={form} id="myForm" name="control-hooks">
        <Form.Item label="Designation" rules={[{ required: true }]}>
          <Input
            type="text"
            onChange={(e) => {
              e.persist();
              setProducts({ ...products, designation: e.target.value });
            }}
            style={{ marginLeft: "12px" }}
          />
        </Form.Item>
        <Form.Item label="Description">
          <Input
            type="text"
            onChange={(e) => {
              e.persist();
              setProducts({ ...products, description: e.target.value });
            }}
            style={{ marginLeft: "12px" }}
          />
        </Form.Item>
        <Form.Item label="price" rules={[{ required: true }]}>
          <Input
            type="text"
            onChange={(e) => {
              e.persist();
              setProducts({ ...products, price: parseFloat(e.target.value) });
            }}
            style={{ marginLeft: "12px" }}
          />
        </Form.Item>
        <Form.Item name="filiers" label="Field(s)">
          <MultipleInputSelect
            values={categories}
            placeHolder="select field"
            key="id"
            title="designation"
            handleChange={handleAddCategories}
          />
        </Form.Item>
        <FormItem {...tailLayout}></FormItem>
      </Form>
    </Modal>
  );
}

export default CreateProductsModal;
