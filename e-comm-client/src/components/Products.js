import React, { Fragment } from "react";
import "@elastic/eui/dist/eui_theme_light.css";
import { EuiFlexGroup, EuiFlexItem, EuiFlexGrid } from "@elastic/eui";
import Product from "./Product.js";

const Products = ({ setCurrentID }) => (
  <Fragment>
    <EuiFlexGroup style={{padding:'1.5rem'}}>
      <EuiFlexItem>
        <EuiFlexGrid columns={3}>
          <Product setCurrentID={setCurrentID} />
        </EuiFlexGrid>
      </EuiFlexItem>
    </EuiFlexGroup>
  </Fragment>
);

export default Products;
