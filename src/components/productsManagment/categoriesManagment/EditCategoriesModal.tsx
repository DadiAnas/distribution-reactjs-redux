import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Input, Select } from "antd";
import { useDispatch } from "react-redux";
import { addOne, editOne } from "../../../redux/actions/models";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

function EditCategoriesModal({ showModal, visible, filiere }: any) {
  const [form] = Form.useForm();
  const [newCategorie, setnewCategorie] = useState(filiere);
  const { Option } = Select;
  const dispatch = useDispatch();
  const addfiliere = () => {
    dispatch(editOne("categories", newCategorie.id, newCategorie));
    showModal(false);
  };

  useEffect(() => {
    setnewCategorie(filiere);
    form.setFieldsValue(filiere);
  }, [filiere]);
  return (
    <Modal
      title="Edit Category"
      visible={visible}
      onCancel={() => showModal(false)}
      footer={[
        <Button form="myForm" key="creer" onClick={addfiliere}>
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
              setnewCategorie((filiere: any) => ({
                ...filiere,
                name: e.target.value,
              }));
            }}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default EditCategoriesModal;
