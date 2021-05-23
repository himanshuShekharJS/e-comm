import axios from 'axios';

const url = 'http://localhost:5000/';

export const fetchProducts= ()=> axios.get(url);
export const createProduct = (newProduct) => axios.post(url,newProduct)
export const updateProduct = (id,updatedProduct) => {
    console.log("Inside the updateProduct inAPI...in index.js--->API--->",id,updatedProduct);
    return axios.patch(`${url}${id}`,updatedProduct)}