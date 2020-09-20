import React, { useEffect, useState } from "react";
import { Row, Col, Table, Button } from "antd";
import PlusButton from "../svgs/PlusButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchAll, deleteOne } from "../../redux/actions/models";
import CreateCategoriesModal from "./CategoriesCreateModalComponent";
import { BarsOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import CategoriesEditModal from "./CategoriesEditModal";

function CategoriesTableComponent() {
  const [isCreateModalVisible, showCreateModalVisible] = useState(false);
  const [isEditModalVisible, showEditModalVisible] = useState(false);

  const [categorieToEdit, setCategorieToEdit] = useState(null);
  const dispatch = useDispatch();
  const categories: any = useSelector(
    (state: any) => state.models["categories"]
  );
  useEffect(() => {
    dispatch(fetchAll("categories"));
  }, []);
  return (
    <>
      <Table
        columns={[
          {
            title: "Categories",
            dataIndex: "name",
            key: "id",
            width: "60%",
          },
          {
            title: "",
            render: (cell, row, index) => (
              <>
                <div className="actionButtons">
                  <Link to={`/categories/${categories[index].id}/products`}>
                    <Button>
                      <BarsOutlined />
                    </Button>
                  </Link>
                  <Button
                    onClick={() => {
                      setCategorieToEdit(categories[index]);
                      showEditModalVisible(true);
                    }}
                  >
                    <EditOutlined style={{ color: "orange" }} />
                  </Button>
                  <Button
                    danger
                    onClick={() =>
                      dispatch(deleteOne("categories", categories[index].id))
                    }
                  >
                    <DeleteOutlined />
                  </Button>
                </div>
              </>
            ),
          },
        ]}
        dataSource={categories || []}
        key="id"
      />
      <div className="footer">
        <PlusButton
          showModal={() => showCreateModalVisible(!isCreateModalVisible)}
        />
      </div>
      <CreateCategoriesModal
        visible={isCreateModalVisible}
        showModal={showCreateModalVisible}
      />
      <CategoriesEditModal
        categorie={categorieToEdit}
        visible={isEditModalVisible}
        showModal={showEditModalVisible}
      />
    </>
  );
}

export default CategoriesTableComponent;
