import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Modal, Button, Select } from "antd";
import { addOne, fetchAll } from "../../redux/actions/models";
import "antd/dist/antd.css";
import MultipleInputSelect from "../MultipleInputSelect";
import { useForm } from "react-hook-form";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function CreateProductsModal({ showModal, visible }: any) {
  const [form] = Form.useForm();
  const { register, handleSubmit, errors } = useForm();
  const [products, setProducts] = useState({});
  const [category, setCategory] = useState({});
  const dispatch = useDispatch();
  const categories = useSelector((state: any) => state.models["categories"]);

  function handleAddCategories(selectedCategories: any) {
    if (selectedCategories.length === 1) {
      setProducts((products) => ({
        ...products,
        categories: categories?.map((f: any) => ({ id: f.value })),
      }));
      setCategory(categories?.map((cat: any) => ({ id: cat.value })));
      console.log(category);
    }
  }
  useEffect(() => {
    dispatch(fetchAll("categories"));
  }, []);

  const addProduct = () => {
    form
      .validateFields()
      .then(() => {
        dispatch(addOne("products", products));
        showModal(false);
      })
      .catch((error) => {
        return;
      });
  };
  const onSubmit = (data: any) => {
    console.log("image", data.image[0].name);
    setProducts({ ...products, picture: data.image[0].name });
  };

  return (
    <Modal
      title="Add product "
      visible={visible}
      onCancel={() => showModal(false)}
      forceRender={true}
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
        <Form.Item>
          <input
            style={{ float: "right" }}
            type="file"
            ref={register({ required: true, maxLength: 30 })}
            onChange={handleSubmit(onSubmit)}
            name="image"
          />
          {errors.name && errors.name.type === "required" && (
            <span>This is required</span>
          )}
          {errors.name && errors.name.type === "maxLength" && (
            <span>Max length exceeded</span>
          )}
        </Form.Item>
        <Form.Item label="Designation" rules={[{ required: true }]} required>
          <Input
            type="text"
            onChange={(e) => {
              e.persist();
              setProducts({ ...products, designation: e.target.value });
            }}
          />
        </Form.Item>
        <Form.Item label="Description">
          <Input
            type="text"
            onChange={(e) => {
              e.persist();
              setProducts({ ...products, description: e.target.value });
            }}
          />
        </Form.Item>
        <Form.Item label="price" rules={[{ required: true }]} required>
          <Input
            type="text"
            onChange={(e) => {
              e.persist();
              setProducts({ ...products, price: parseFloat(e.target.value) });
            }}
            required
          />
        </Form.Item>
        <Form.Item name="categories" label="Categorie(s)">
          <MultipleInputSelect
            values={categories}
            placeHolder="select categorie"
            key="id"
            title="designation"
            handleChange={handleAddCategories}
          />
        </Form.Item>
        <Form.Item {...tailLayout}></Form.Item>
      </Form>
    </Modal>
  );
}

export default CreateProductsModal;
