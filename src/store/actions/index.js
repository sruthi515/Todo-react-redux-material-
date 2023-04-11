import * as types from "./actions.types";

export const addItem = () => {
  return {
    type: types.ADD_ITEM,
  };
};

export const deleteItem = (item) => {
  return {
    type: types.DELETE_ITEM,
    item: item,
  };
};

export const editItem = (item) => {
  return {
    type: types.EDIT_ITEM,
    item: item,
  };
};
export const setTitle = (title) => {
  return {
    type: types.SET_TITLE,
    title: title,
  };
};
export const setError = (error) => {
  return {
    type: types.SET_ERROR,
    error: error,
  };
};
export const setItem = (item) => {
  return {
    type: types.SET_ITEM,
    item: item,
  };
};
export const setEdit = () => {
  return {
    type: types.SET_EDIT,
  };
};
