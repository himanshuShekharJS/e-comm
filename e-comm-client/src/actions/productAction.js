import * as api from '../api/index.js'


//action creators
import { ADD_NEW_PRODUCT, FETCH_ALL_PRODUCTS, UPDATE_THE_PRODUCT } from "./actionTypes"

//making use of redux-thunk
export const getProducts = ()=> async(dispatch) => {
    try {
        const response = await api.fetchProducts();
        console.log('Inside productAction.js File---->, response from the API after fetching all the product data',response);
        const {data} = response;
        dispatch({type:FETCH_ALL_PRODUCTS, payload:data})
    } catch (error) {
        console.log('Inside productAction.js File---->Error occured for getProducts() ',error.message);
    }
}

export const addNewProduct = (newProduct) => async(dispatch) => {
try {
    const response = await api.createProduct(newProduct);
    const {data} = response;
    dispatch({
        type:ADD_NEW_PRODUCT, payload:data
    })
} catch (error) {
    console.log('Inside productAction.js File---->Error occured for addNewProduct() ',error);
}
}

export const updateTheProduct = (id,prevProduct)=> async(dispatch) =>{
    try {
        console.log('Inside the updaetTheProduct');
        console.log(id,prevProduct);
        const updatetdProductinResponse = await api.updateProduct(id,prevProduct);
        console.log('Inside the updateThe Product inside productAction.js---->',updatetdProductinResponse);
        const {data} = updatetdProductinResponse;
        console.log('Inside the updateThe Product inside productAction.js---->destructuring data---->',data);
        dispatch({
            type:UPDATE_THE_PRODUCT,payload:data
        })
    } catch (error) {
        console.log(error);
    }
}