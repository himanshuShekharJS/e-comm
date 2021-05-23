import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  EuiButtonIcon,
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
  EuiImage,
  EuiSpacer,
  EuiPanel,
  EuiFlexGrid,
  EuiText,
  EuiDescriptionList,
  EuiDescriptionListDescription,
  EuiDescriptionListTitle,
} from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_light.css";

const Product = ({ setCurrentID }) => {
  const products = useSelector((state) => state.productReducer); //productReducer is the object storing the value being fetched from the backend and you can find it inside the rootReducer.js file where the state is being managed
  console.log("Inside Product .js---------->inside product()");
  console.log("Products fetched from the backend----->", products);
  // const [editProductForm,setEditProductForm] = useState(false);

  // const openCurrentProductDetails = (id) =>{
  //   const selectedProduct = products.find((product)=>product._id===id);
  //   console.log("InsideopenCurrentProductDetails() in Product.JS file--->On click edit",selectedProduct);
    
  // }



  const onEditClickHandler = (id) => {
    console.log("YOu wanted to edit the Product??");
    console.log(id);
    setCurrentID(id);
    // setEditProductForm(true);
    // openCurrentProductDetails(id);
  };
  
  const onDeleteClickHandler = (id) => {
    console.log("YOu wanted to delete the Product??");
    setCurrentID(id);

  };
  

  const showProductDescription = (imageSrc,id,title,price) =>(
    <EuiFlexItem key={id}>
          <EuiPanel>
            <EuiFlexGrid columns={2}>
              <EuiFlexItem grow={false}>
                <span style={{ width: "12rem" }}>
                  <EuiImage
                    src={imageSrc}
                    alt="Product Image"
                    margin="s"
                    size="fullWidth"
                  />
                </span>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
              <EuiFlexItem grow={2}>
              <EuiDescriptionList>
              <EuiDescriptionListTitle>
                <EuiText>
                  <h4>{title}</h4>
                </EuiText>
              </EuiDescriptionListTitle>
              <EuiDescriptionListDescription>
                <EuiText size='s'>₹{price}</EuiText>
              </EuiDescriptionListDescription>
            </EuiDescriptionList>
              </EuiFlexItem>
                <EuiSpacer />
                <EuiFlexGroup justifyContent="center">
                  <EuiFlexItem grow={false}>
                    <EuiButtonIcon
                      color="primary"
                      iconType="pencil"
                      title="Edit"
                      aria-label="Use aria labels when no actual label is in use"
                      onClick={()=>onEditClickHandler(id)}
                    />
                  </EuiFlexItem>
                  <EuiFlexItem grow={false}>
                    <EuiButtonIcon
                      color="danger"
                      iconType="trash"
                      title="Delete"
                      aria-label="Use aria labels when no actual label is in use"
                      onClick={()=>onDeleteClickHandler(id)}
                    />
                  </EuiFlexItem>
                </EuiFlexGroup>
              </EuiFlexItem>
            </EuiFlexGrid>
          </EuiPanel>
        </EuiFlexItem>
  )
  return (
    <>
      <EuiFlexGroup>
        {products.map((product)=>(
          showProductDescription(product.selectedFile,product._id,product.title,product.price)
        ))}
      </EuiFlexGroup>
    </>
  );
};

export default Product;
