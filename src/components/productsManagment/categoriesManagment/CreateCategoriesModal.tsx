import React, { useState } from "react";
import { Modal, Button, Form, Input, Select } from "antd";
import { useDispatch } from "react-redux";
import { addOne } from "../../../redux/actions/models";

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

function CreateCategorieseModal({ showModal, visible }: any) {
  const [form] = Form.useForm();
  const [categorie, setcategorie] = useState<any>({});
  const { Option } = Select;
  const dispatch = useDispatch();
  const addcategorie = () => {
    dispatch(addOne("categories", categorie));
    form.setFieldsValue({ title: "" });
    showModal(false);
  };
  return (
    <Modal
      title="créer un categorie "
      visible={visible}
      onCancel={() => showModal(false)}
      footer={[
        <Button form="myForm" key="creer" onClick={addcategorie}>
          creer
        </Button>,
        <Button key="cancel" htmlType="button" onClick={() => showModal(false)}>
          cancel
        </Button>,
      ]}
    >
      <Form {...layout} form={form} name="control-hooks" id="myForm">
        <Form.Item
          name="name"
          label="Nom du categorie"
          rules={[{ required: true }]}
        >
          <Input
            style={{ marginLeft: "12px" }}
            onChange={(e) => {
              e.persist();
              setcategorie((categorie: any) => ({
                ...categorie,
                name: e.target.value,
              }));
            }}
            required
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default CreateCategorieseModal;
