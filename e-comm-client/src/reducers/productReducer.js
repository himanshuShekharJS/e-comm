import { FETCH_ALL_PRODUCTS,ADD_NEW_PRODUCT, UPDATE_THE_PRODUCT } from "../actions/actionTypes";
export const initialState = [];



const productReducer = (products=initialState, action) =>{
switch (action.type) {
    case UPDATE_THE_PRODUCT:
        console.log("Inside the productReducer---After clciking the dit button -->Dispatched the UPDATE THE PRODUCT",products);
        return products.map((p)=> p._id===action.payload._id ? action.payload : p)
    case FETCH_ALL_PRODUCTS:
        return action.payload;
    case ADD_NEW_PRODUCT:
        return [...products,action.payload];
    default:
        return products;
}
}

export default productReducer;