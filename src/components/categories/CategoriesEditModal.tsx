import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Input, Select } from "antd";
import { useDispatch } from "react-redux";
import { addOne, editOne } from "../../redux/actions/models";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

function CategoriesEditModal({ showModal, visible, category }: any) {
  const [form] = Form.useForm();
  const [newCategorie, setnewCategorie] = useState(category);
  const dispatch = useDispatch();
  const addcategory = () => {
    dispatch(editOne("categories", newCategorie.id, newCategorie));
    showModal(false);
  };

  useEffect(() => {
    setnewCategorie(category);
    form.setFieldsValue(category);
  }, [category]);
  return (
    <Modal
      title="Edit Category"
      visible={visible}
      onCancel={() => showModal(false)}
      footer={[
        <Button form="myForm" key="creer" onClick={addcategory}>
          edit
        </Button>,
        <Button key="cancel" htmlType="button" onClick={() => showModal(false)}>
          cancel
        </Button>,
      ]}
    >
      <Form {...layout} form={form} name="control-hooks" id="myForm">
        <Form.Item
          name="title"
          label="New Category Name"
          rules={[{ required: true }]}
        >
          <Input
            style={{ marginLeft: "12px" }}
            onChange={(e) => {
              e.persist();
              setnewCategorie((category: any) => ({
                ...category,
                name: e.target.value,
              }));
            }}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default CategoriesEditModal;
