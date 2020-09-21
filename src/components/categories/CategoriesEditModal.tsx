import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Input, Select } from "antd";
import { useDispatch } from "react-redux";
import { addOne, editOne } from "../../redux/actions/models";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};

function CategoriesEditModal({ showModal, visible, category }: any) {
  const [form] = Form.useForm();
  const [newCategory, setnewCategory] = useState(category);
  const dispatch = useDispatch();
  const addcategory = () => {
    dispatch(editOne("categories", newCategory.id, newCategory));
    showModal(false);
  };

  useEffect(() => {
    setnewCategory(category);
    form.setFieldsValue(category);
    console.log(newCategory);
  }, [category]);
  return (
    <Modal
      forceRender
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
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input
            onChange={(e) => {
              e.persist();
              setnewCategory((category: any) => ({
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
