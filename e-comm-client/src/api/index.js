import axios from 'axios';

const url = 'http://localhost:5000/';

export const fetchProducts= ()=> axios.get(url);
export const createProduct = (newProduct) => axios.post(url,newProduct)
export const updateProduct = (id,updatedProduct) => axios.patch(`${url}${id}`,updatedProduct)
export const deleteProduct = (id) => axios.delete(`${url}${id}`);
export const filterProduct = (category) => axios.get(`${url}${category}`);
export const sortProduct = (category) => axios.get(`${url}sort/${category}`);
export const filterBetween = (minPrice,maxPrice) => axios.get(`${url}range?min=${minPrice}&max=${maxPrice}`);
export const searchAllProduct = (value) => axios.get(`${url}search/${value}`)
