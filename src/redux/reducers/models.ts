import { Action } from "../types";
import { FETCH_ALL, ADD_ONE, DELETE_ONE, EDIT_ONE } from "../actions/models";

export default (state: any = {}, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_ALL:
      return {
        ...state,
        [payload.model]: payload.data,
      };
    case ADD_ONE:
      return {
        ...state,
        [payload.model]: [...state[payload.model], payload.data],
      };
    case EDIT_ONE: {
      return {
        ...state,
        [payload.model]: state[payload.model].map((model: any) => {
          if (model.id === payload.id) {
            return payload.data;
          }
          return model;
        }),
      };
    }
    case DELETE_ONE:
      return {
        ...state,
        [payload.model]: state[payload.model]?.filter(
          (m: any) => m.id !== payload.id
        ),
      };
    default:
      return state;
  }
};
