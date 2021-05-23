import * as api from "../api/index.js";

//action creators
import {
  ADD_NEW_PRODUCT,
  DELETE_THE_PRODUCT,
  FETCH_ALL_PRODUCTS,
  FILTER_BY_MENS_WEAR,
  FILTER_BY_WOMENS_WEAR,
  UPDATE_THE_PRODUCT,
  FILTER_BY_LAPTOPS,
  FILTER_BY_MOBILES,
  FILTER_BY_LOW_TO_HIGH,
  FILTER_BY_HIGH_TO_LOW,
  FILTER_BY_RANGE,
  SEARCH,
} from "./actionTypes";

//making use of redux-thunk
export const getProducts = () => async (dispatch) => {
  try {
    const response = await api.fetchProducts();
    const { data } = response;
    dispatch({ type: FETCH_ALL_PRODUCTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const addNewProduct = (newProduct) => async (dispatch) => {
  try {
    const response = await api.createProduct(newProduct);
    const { data } = response;
    dispatch({
      type: ADD_NEW_PRODUCT,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateTheProduct = (id, prevProduct) => async (dispatch) => {
  try {
    const updatetdProductinResponse = await api.updateProduct(id, prevProduct);
    const { data } = updatetdProductinResponse;
    dispatch({
      type: UPDATE_THE_PRODUCT,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTheProduct = (id) => async (dispatch) => {
  try {
    await api.deleteProduct(id);
    dispatch({
      type: DELETE_THE_PRODUCT,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};
export const filterBy = (category) => async (dispatch) => {
  let actionTypes = "";
  switch (category) {
    case "mens_wear":
      actionTypes = FILTER_BY_MENS_WEAR;
      break;
    case "womens_wear":
      actionTypes = FILTER_BY_WOMENS_WEAR;
      break;
    case "laptops":
      actionTypes = FILTER_BY_LAPTOPS;
      break;
    case "mobiles":
      actionTypes = FILTER_BY_MOBILES;
      break;
    default:
      return;
  }
  try {
    const filteredProductInResponse = await api.filterProduct(category);
    const { data } = filteredProductInResponse;
    dispatch({
      type: actionTypes,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const sortByPrice = (category) => async (dispatch) => {
  let actionTypes = "";
  if (category === "low_to_high") {
    actionTypes = FILTER_BY_LOW_TO_HIGH;
  } else actionTypes = FILTER_BY_HIGH_TO_LOW;

  try {
    const sortedResponse = await api.sortProduct(category);
    const { data } = sortedResponse;
    dispatch({
      type: actionTypes,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const filterByRange = (minPrice, maxPrice) => async (dispatch) => {
  console.log(minPrice, maxPrice);
  try {
    const inRangeResponse = await api.filterBetween(minPrice, maxPrice);
    const { data } = inRangeResponse;
    console.log(data);
    console.log(inRangeResponse);
    dispatch({
      type: FILTER_BY_RANGE,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const searchAmong = (text) => async (dispatch) => {
  try {
    const response = await api.searchAllProduct(text);
    const { data } = response;
    dispatch({
      type: SEARCH,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
