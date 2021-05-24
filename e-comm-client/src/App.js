import React, { useEffect, useState } from "react";
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiSpacer,
  EuiButton,
  EuiFlexGrid,
} from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_light.css";
import { useDispatch } from "react-redux";
import AddProductModal from "./components/AddProductModal.js";
import Products from "./components/Products.js";
import { getProducts,getProductsBySearch } from "./actions/productAction.js";
import Filter from "./components/Filter.js";
import Search from "./components/Search.js";
import{useHistory,useLocation} from 'react-router-dom';

// function useQuery(){
//   return new URLSearchParams(useLocation().search);
// }

const App = () => {
  const [currentID, setCurrentID] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const onSearchHandler = (value)=>{
    //search products logiics
    if(value.trim()){
      //dispatch some logic to fetch search product
      dispatch(getProductsBySearch(value))
    }else{
      dispatch(getProducts())
    }
    
  }

  return (
    <>
      <EuiFlexGroup gutterSize="m">
        <EuiFlexItem>
          <EuiPanel style={{position:'sticky',zIndex:'10000',top:'0'}}>
            <EuiFlexGroup>
              <EuiFlexItem grow={false}>
                <AddProductModal
                  currentID={currentID}
                  setCurrentID={setCurrentID}
                />
              </EuiFlexItem>
              <EuiFlexItem grow={true}>
                <Search onSearchHandler ={onSearchHandler}/>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <Filter />
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiPanel>
          <EuiFlexItem>
            <EuiSpacer />
          </EuiFlexItem>
          <Products setCurrentID={setCurrentID} currentID={currentID}/>
        </EuiFlexItem>
      </EuiFlexGroup>
    </>
  );
};

export default App;
