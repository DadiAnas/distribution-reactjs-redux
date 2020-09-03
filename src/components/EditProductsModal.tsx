import React, { useState, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import {
  LoadingOutlined,
  PlusOutlined,
  SettingOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { fetchAll, editOne } from "../redux/actions/models";
import MultipleInputSelect from "./MultipleInputSelect";

function getBase64(img: any, callback: any) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file: any) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}
function confirm(e: any) {
  message.success("Click on Yes");
}

function cancel(e: any) {
  message.error("Click on No");
}

function EditProductsModal({ visible, showModal, coursToEdit }: any) {
  const [loading, setLoading] = useState(false);
  const filiers = useSelector((state: any) => state.models["filiers"]);
  const [cours, setCours] = useState<any>({});
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(coursToEdit); //({...coursToEdit,filiers:coursToEdit.filiers.map((f:any) => f.id)})
    setCours(coursToEdit);
  }, [coursToEdit]);
  useEffect(() => {
    dispatch(fetchAll("categories"));
  }, []);

  function handleAddFiliere(filiersIds: number[]) {
    console.log({ filiersIds });
    setCours((cours: any) => ({
      ...cours,
      filiers: filiersIds.map((id: any) => ({ id: id.value })),
    }));
  }
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  const handleChange = (info: any) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl: any) => {
        setLoading(false);
        setImage(imageUrl);
      });
    }
  };
  const { Option } = Select;
  const [image, setImage] = useState();
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div className="ant-upload-text">Upload</div>
    </div>
  );
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const handleEdit = () => {
    console.log(coursToEdit, cours);

    dispatch(editOne("products", cours.id, cours));
    showModal(false);
  };
  return (
    <Modal
      title="Edit course"
      visible={visible}
      onCancel={() => showModal(false)}
      footer={[
        <Button
          form="myForm"
          key="creer"
          htmlType="submit"
          onClick={handleEdit}
        >
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
          label="Course Name"
          rules={[{ required: true }]}
        >
          <Input
            style={{ marginLeft: "12px" }}
            onChange={(e) => {
              e.persist();
              setCours((cours: any) => ({ ...cours, title: e.target.value }));
            }}
          />
        </Form.Item>
        <Form.Item
          name="anneeScolaire"
          label="Academic Year"
          rules={[{ required: true }]}
        >
          <Input
            style={{ marginLeft: "12px" }}
            onChange={(e) => {
              e.persist();
              setCours((cours: any) => ({
                ...cours,
                anneeScolaire: e.target.value,
              }));
            }}
          />
        </Form.Item>
        <Form.Item name="filiers" label="Field(s)">
          <MultipleInputSelect
            values={filiers}
            placeHolder="Select Field"
            key="id"
            title="title"
            handleChange={handleAddFiliere}
          />
        </Form.Item>
        <Form.Item {...tailLayout}></Form.Item>
      </Form>
    </Modal>
  );
}

export default EditProductsModal;
