import {
  FETCH_ALL_PRODUCTS,
  ADD_NEW_PRODUCT,
  UPDATE_THE_PRODUCT,
  DELETE_THE_PRODUCT,
  FILTER_BY_MENS_WEAR,
  FILTER_BY_WOMENS_WEAR,
  FILTER_BY_MOBILES,
  FILTER_BY_LAPTOPS,
  FILTER_BY_LOW_TO_HIGH,
  FILTER_BY_HIGH_TO_LOW,
  FILTER_BY_RANGE,
  SEARCH,
} from "../actions/actionTypes";
export const initialState = [];

const productReducer = (products = initialState, action) => {
  switch (action.type) {
    case UPDATE_THE_PRODUCT:
      return products.map((p) =>
        p._id === action.payload._id ? action.payload : p
      );
    case FETCH_ALL_PRODUCTS:
      return action.payload;
    case ADD_NEW_PRODUCT:
      return [...products, action.payload];
    case DELETE_THE_PRODUCT:
      return products.filter((p) => p._id !== action.payload);
    case FILTER_BY_MENS_WEAR:
      return action.payload;
    case FILTER_BY_WOMENS_WEAR:
      return action.payload;
    case FILTER_BY_MOBILES:
      return action.payload;
    case FILTER_BY_LAPTOPS:
      return action.payload;
    case FILTER_BY_LOW_TO_HIGH:
      return action.payload;
    case FILTER_BY_HIGH_TO_LOW:
      return action.payload;
    case FILTER_BY_RANGE:
      return action.payload;
    case SEARCH:
      return action.payload;
    default:
      return products;
  }
};

export default productReducer;
