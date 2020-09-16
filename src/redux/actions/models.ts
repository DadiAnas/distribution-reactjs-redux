import api from "../../api";
import { Model } from "../types";
import { Modal } from "antd";
import ErrorModal from "../../components/ErrorModal";

export const FETCH_ALL = "FETCH_ALL";

export const fetchAll = (model: Model, query: string = "") => {
  return (dispatch: any) => {
    api
      .get(`/${model}?${query}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        console.log(response);
        dispatch({ type: FETCH_ALL, payload: { model, data: response.data } });
      })
      .catch((err) => {
        console.error(`Fetch All ${model} error:\n`, err);
        ErrorModal(err);
      });
  };
};

export const ADD_ONE = "ADD_ONE";

export const addOne = (model: Model, data: any) => {
  return (dispatch: any) => {
    api
      .post(`/${model}`, data)
      .then((response) => {
        console.log(response);
        dispatch({ type: ADD_ONE, payload: { model, data: response.data } });
      })
      .catch((err) => {
        console.error(err);
        ErrorModal(err);
      });
  };
};

export const EDIT_ONE = "EDIT_ONE";

export const editOne = (model: Model, id: number, data: any) => {
  return (dispatch: any) => {
    api
      .patch(`/${model}/${id}`, data)
      .then((response) => {
        console.log(response);
        dispatch({
          type: EDIT_ONE,
          payload: { model, id, data: response.data },
        });
      })
      .catch((err) => {
        console.error(err);
        ErrorModal(err);
      });
  };
};

export const DELETE_ONE = "DELETE_ONE";

export const deleteOne = (model: Model, id: number) => {
  return (dispatch: any) => {
    api
      .delete(`/${model}/${id}`)
      .then((response) => {
        console.log(response);
        dispatch({ type: DELETE_ONE, payload: { model, id } });
      })
      .catch((err) => {
        console.error(err);
        ErrorModal(err);
      });
  };
};
