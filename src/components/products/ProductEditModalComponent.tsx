import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Input, Select, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { LoadingOutlined, PlusOutlined, EditOutlined } from "@ant-design/icons";
import { fetchAll, editOne } from "../../redux/actions/models";
import MultipleInputSelect from "../MultipleInputSelect";

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

function ProductEditModalComponent({ visible, showModal, productToEdit }: any) {
  const [loading, setLoading] = useState(false);
  const categories = useSelector((state: any) => state.models["categories"]);
  const [products, setProducts] = useState<any>({ ...productToEdit });
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  useEffect(() => {
    setProducts({ ...productToEdit });
    form.setFieldsValue(productToEdit); //({...productToEdit,categories:productToEdit.categories.map((f:any) => f.id)})
    dispatch(fetchAll("categories"));
  }, [productToEdit]);

  function handleAddFiliere(categoriesIds: number[]) {
    console.log({ categoriesIds });
    setProducts((products: any) => ({
      ...products,
      categories: categoriesIds.map((id: any) => ({ id: id.value })),
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
    dispatch(editOne("products", products.id, products));
    showModal(false);
  };
  return (
    <Modal
      forceRender
      title="Edit product"
      visible={visible}
      onCancel={() => showModal(false)}
      footer={[
        <Button form="myForm" key="edit" htmlType="submit" onClick={handleEdit}>
          edit
        </Button>,
        <Button key="cancel" htmlType="button" onClick={() => showModal(false)}>
          cancel
        </Button>,
      ]}
    >
      <EditOutlined style={{ color: "#e8501d" }} />
      <Form {...layout} form={form} name="control-hooks" id="myForm">
        <Form.Item
          name="designation"
          label="Designation"
          rules={[{ required: true }]}
        >
          <Input
            onChange={(e) => {
              e.persist();
              setProducts((products: any) => ({
                ...products,
                designation: e.target.value,
              }));
            }}
          />
        </Form.Item>
        <Form.Item label="Description" name="description">
          <Input
            type="text"
            onChange={(e) => {
              e.persist();
              setProducts({ ...products, description: e.target.value });
            }}
          />
        </Form.Item>
        <Form.Item
          name="price"
          label="price"
          rules={[{ required: true }]}
          required
        >
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
            placeHolder="Select Categorie"
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

export default ProductEditModalComponent;
