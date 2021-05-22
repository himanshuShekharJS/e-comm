import React, { useState, Fragment } from 'react';
import '@elastic/eui/dist/eui_theme_light.css';
import {
    EuiFlexGroup,
    EuiFlexGrid,
    EuiFlexItem
  } from '@elastic/eui';



const Products = () =>(<Fragment>
<EuiFlexGroup>
    <EuiFlexItem>
        <EuiFlexGrid columns={2}>
            <EuiFlexItem>Product 1</EuiFlexItem>
            <EuiFlexItem>Product 1</EuiFlexItem>
            <EuiFlexItem>Product 1</EuiFlexItem>
            <EuiFlexItem>Product 1</EuiFlexItem>
            <EuiFlexItem>Product 1</EuiFlexItem>
            <EuiFlexItem>Product 1</EuiFlexItem>
        </EuiFlexGrid>
    </EuiFlexItem>
</EuiFlexGroup>


</Fragment>);


export default Products;