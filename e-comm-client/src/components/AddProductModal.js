import React, { useState, Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  EuiButton,
  EuiButtonEmpty,
  EuiFieldText,
  EuiForm,
  EuiFormRow,
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiRange,
  EuiSwitch,
  EuiSuperSelect,
  EuiText,
  EuiFilePicker,
  EuiOverlayMask,
} from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_light.css";
import { htmlIdGenerator } from "@elastic/eui/lib/services";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { addNewProduct, updateTheProduct } from "../actions/productAction";

const AddProductModal = ({ currentID, setCurrentID }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [minPrice, setMinPrice] = useState(100);
  const [maxPrice, setMaxPrice] = useState(2000);
  const [stepValue, setStepValue] = useState(50);
  const [productUpdate, setProductUpdate] = useState(false);
  const [productData, setProductData] = useState({
    title: "",
    categoryValue: "mens wear",
    price: 400,
    selectedFile: "",
  });
  const product = useSelector((state) =>
    currentID ? state.productReducer.find((p) => p._id === currentID) : null
  );

  useEffect(() => {
    if (product) {
      setProductData({
        title: product.title,
        categoryValue: product.categoryValue,
        price: product.price,
        selectedFile: product.selectedFile,
      });
      if (
        product.categoryValue === "mens_wear" ||
        product.categoryValue === "womens_wear"
      ) {
        setMinPrice(100);
        setMaxPrice(2000);
        setStepValue(50);
      } else if (product.categoryValue === "laptops") {
        setMinPrice(15000);
        setMaxPrice(80000);
        setStepValue(500);
      } else {
        setMinPrice(5000);
        setMaxPrice(50000);
        setStepValue(500);
      }
      setIsModalVisible(true);
      setProductUpdate(true);
    }
  }, [product]);

  const dispatch = useDispatch();

  const closeModal = () => {
    setIsModalVisible(false);
    setProductData({
      title: "",
      categoryValue: "mens wear",
      price: 400,
      selectedFile: "",
    });
    setCurrentID(null)
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (currentID) {
      dispatch(updateTheProduct(currentID, productData));
    } else {
      console.log(productData);
      dispatch(addNewProduct(productData));
    }
    setProductData({
      title: "",
      categoryValue: "mens wear",
      price: 400,
      selectedFile: "",
    });
    closeModal();
  };

  const showModal = () => setIsModalVisible(true);

  const onCategoryChangeHandler = (value) => {
    setProductData({ ...productData, categoryValue: value });
    if (value === "mens_wear" || value === "womens_wear") {
      setMinPrice(100);
      setMaxPrice(2000);
      setStepValue(50);
    } else if (value === "laptops") {
      setMinPrice(15000);
      setMaxPrice(80000);
      setStepValue(500);
    } else {
      setMinPrice(5000);
      setMaxPrice(50000);
      setStepValue(500);
    }
  };
  const onChangeTitleHandler = (e) => {
    setProductData({ ...productData, title: e.target.value });
  };
  const onChangePriceHandler = (e) => {
    setProductData({ ...productData, price: e.target.value });
  };
  const categoryOptions = [
    {
      value: "mens_wear",
      inputDisplay: "Men's Wear",
      dropdownDisplay: (
        <Fragment>
          <strong>Men's Wear</strong>
        </Fragment>
      ),
    },
    {
      value: "womens_wear",
      inputDisplay: "Women's Wear",
      dropdownDisplay: (
        <Fragment>
          <strong>Women's Wear</strong>
        </Fragment>
      ),
    },
    {
      value: "laptops",
      inputDisplay: "Laptops",
      dropdownDisplay: (
        <Fragment>
          <strong>Laptops</strong>
        </Fragment>
      ),
    },
    {
      value: "mobiles",
      inputDisplay: "Mobiles",
      dropdownDisplay: (
        <Fragment>
          <strong>Mobiles</strong>
        </Fragment>
      ),
    },
  ];

  const AddProductForm = (
    <EuiForm id="modalFormId" component="form">
      <EuiFormRow label="Title">
        <EuiFieldText
          placeholder="Product's Title"
          value={productData.title}
          onChange={(e) => onChangeTitleHandler(e)}
          aria-label="Use aria labels when no actual label is in use"
        />
      </EuiFormRow>
      <EuiFormRow label="Category">
        <EuiSuperSelect
          options={categoryOptions}
          valueOfSelected={productData.categoryValue}
          onChange={(value) => onCategoryChangeHandler(value)}
          itemLayoutAlign="top"
        />
      </EuiFormRow>
      <EuiFormRow label="Price">
        <EuiRange
          id={htmlIdGenerator()()}
          value={productData.price}
          onChange={onChangePriceHandler}
          showInput
          min={minPrice}
          max={maxPrice}
          step={stepValue}
          showLabels
          showValue
          aria-label="An example of EuiRange"
        />
      </EuiFormRow>
      <EuiFormRow label="Upload Product Image">
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) =>
            setProductData({ ...productData, selectedFile: base64 })
          }
        />
      </EuiFormRow>
    </EuiForm>
  );

  let modal;

  if (isModalVisible) {
    modal = (
      <EuiOverlayMask>
        <EuiModal onClose={closeModal} style={{ width: 400 }}>
          <EuiModalHeader>
            <EuiModalHeaderTitle>
              {productUpdate ? <h3>Edit Product</h3> : <h3>Add New Product</h3>}
            </EuiModalHeaderTitle>
          </EuiModalHeader>

          <EuiModalBody>{AddProductForm}</EuiModalBody>

          <EuiModalFooter style={{ justifyContent: "center" }}>
            <EuiButtonEmpty onClick={closeModal}>Cancel</EuiButtonEmpty>

            <EuiButton
              type="submit"
              form="modalFormId"
              onClick={onSubmitHandler}
              fill
            >
              {productUpdate ? "Save" : `Add Product`}
            </EuiButton>
          </EuiModalFooter>
        </EuiModal>
      </EuiOverlayMask>
    );
  }

  return (
    <span>
      <EuiButton fill size="s" onClick={showModal}>
        Add New Product
      </EuiButton>
      {modal}
    </span>
  );
};

export default AddProductModal;
