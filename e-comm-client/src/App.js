import React,{useEffect, useState} from 'react';
import {
    EuiFlexGroup,
    EuiFlexItem,
    EuiPanel,
    EuiSpacer,
    EuiButton,
    EuiFlexGrid
} from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.css';
import{useDispatch} from 'react-redux';
import AddProductModal from './components/AddProductModal.js';
import Products from './components/Products.js';
import {getProducts} from './actions/productAction.js'
import Filter from './components/Filter.js';
import Search from './components/Search.js';



const App = () =>{
    const [currentID, setCurrentID] = useState(null)
    const dispatch = useDispatch();
    console.log('inside the APP.JS--->CurrentID---->',currentID);

    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])

    return(
        <>
        <EuiFlexGroup gutterSize='m'>
            <EuiFlexItem>
                <EuiPanel>
                <AddProductModal currentID ={currentID} setCurrentID={setCurrentID} />
                    <Filter />
                    <Search />
                <EuiSpacer />
                    <Products setCurrentID={setCurrentID} />
                </EuiPanel>
            </EuiFlexItem>
        </EuiFlexGroup>
        </>
    )
}

export default App;