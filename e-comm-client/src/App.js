import React from 'react';
import AddProductModal from './components/AddProductModal.js';
import {
   EuiFlexGroup,
   EuiFlexItem,
   EuiPanel,EuiSpacer
  } from '@elastic/eui';
  import '@elastic/eui/dist/eui_theme_light.css';
import Products from './components/Products.js';


const App = () =>{
    return(
        <>
        <EuiFlexGroup gutterSize='m'>
            <EuiFlexItem>
                <EuiPanel>
                <AddProductModal />

                </EuiPanel>
                <EuiSpacer />
                <EuiPanel>
                    <Products />
                </EuiPanel>
            </EuiFlexItem>
        </EuiFlexGroup>
        </>
    )
}

export default App;