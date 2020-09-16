import React, { useState, useEffect } from "react";
import HomeLayout from "../../Home/HomeLayout";
import { Row, Col, Table, Button } from "antd";
import PlusButton from "../../svgs/PlusButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchAll, deleteOne } from "../../../redux/actions/models";
import CreateCategoriesModal from "./CreateCategoriesModal";
import { BarsOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import EditCategoriesModal from "./EditCategoriesModal";
import "./css/Categories.css";

function Categories() {
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
    <HomeLayout>
      <div className="site-card-wrapper">
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
        />
      </div>
      <div className="footer">
        <PlusButton
          showModal={() => showCreateModalVisible(!isCreateModalVisible)}
        />
      </div>
      <CreateCategoriesModal
        visible={isCreateModalVisible}
        showModal={showCreateModalVisible}
      />
      <EditCategoriesModal
        categorie={categorieToEdit}
        visible={isEditModalVisible}
        showModal={showEditModalVisible}
      />
    </HomeLayout>
  );
}

export default Categories;
