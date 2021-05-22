import React, { useState, Fragment } from 'react';

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
  EuiFilePicker
} from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.css';

import { htmlIdGenerator } from '@elastic/eui/lib/services';

 const AddProductModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [categoryValue, setCategoryValue] = useState('mens wear');
  const [file, setFile] = useState({});
  const [large, setLarge] = useState(false);
  const [title,setTitle] = useState('');
  const [price,setPrice] = useState(400);
  const [minPrice,setMinPrice] = useState(100);
  const [maxPrice,setMaxPrice] = useState(2000);
  const [stepValue,setStepValue] = useState(50)


  
  const closeModal = () => setIsModalVisible(false);

  const showModal = () => setIsModalVisible(true);

  const onCategoryChangeHandler = (value) => {
    setCategoryValue(value);
    if(value === 'mens_wear' || value === "womens_wear"){
      setMinPrice(100);
      setMaxPrice(2000);
      setPrice(maxPrice);
      setStepValue(50);
    }
    else if(value === 'laptops' ){
      setMinPrice(15000);
      setMaxPrice(80000);
      setPrice(maxPrice);
      setStepValue(500);

    }
    else{
      setMinPrice(5000);
      setMaxPrice(50000);
      setPrice(maxPrice);
      setStepValue(500);

    }
  };
  const onChangeTitleHandler = (e) =>{
    setTitle(e.target.value)
  }
  const onChangePriceHandler = (e) =>{
    setPrice(e.target.value)
  }
const onChangeFileHandler =(file) =>{
  setFile(file)
}
  const categoryOptions = [
    {
      value: 'mens_wear',
      inputDisplay: 'Men\'s Wear',
      dropdownDisplay: (
        <Fragment>
          <strong>Men's Wear</strong>
        </Fragment>
      ),
    },
    {
      value: 'womens_wear',
      inputDisplay: 'Women\'s Wear',
      dropdownDisplay: (
        <Fragment>
          <strong>Women's Wear</strong>
        </Fragment>
      ),
    },
    {
      value: 'laptops',
      inputDisplay: 'Laptops',
      dropdownDisplay: (
        <Fragment>
          <strong>Laptops</strong>
        </Fragment>
      ),
    },
    {
      value: 'mobiles',
      inputDisplay: 'Mobiles',
      dropdownDisplay: (
        <Fragment>
          <strong>Mobiles</strong>
        </Fragment>
      ),
    }
  ];

  const AddProductForm = (
    <EuiForm id="modalFormId" component="form">

      <EuiFormRow label="Title">
      <EuiFieldText
        placeholder="Product's Title"
        value={title}
        onChange={(e) => onChangeTitleHandler(e)}
        aria-label="Use aria labels when no actual label is in use"
      />
      </EuiFormRow>
      <EuiFormRow label="Category">
        <EuiSuperSelect
          options={categoryOptions}
          valueOfSelected={categoryValue}
          onChange={(value) => onCategoryChangeHandler(value)}
          itemLayoutAlign="top"
        />
      </EuiFormRow>
      <EuiFormRow label="Price" >
      <EuiRange
        id={htmlIdGenerator()()}
        value={price}
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
      <EuiFilePicker
              id={htmlIdGenerator()()}
              initialPromptText="Select or drag and drop an Image of the Product"
              onChange={(file) => {
                onChangeFileHandler(file);
              }}
              display={large ? 'large' : 'default'}
              aria-label="Use aria labels when no actual label is in use"
            />
      </EuiFormRow>
    </EuiForm>
  );

  
  let modal;

  if (isModalVisible) {
    modal = (
      <EuiModal onClose={closeModal} initialFocus="[name=popswitch]">
        <EuiModalHeader>
          <EuiModalHeaderTitle>
            <h3>Add New Product</h3>
          </EuiModalHeaderTitle>
        </EuiModalHeader>

        <EuiModalBody>{AddProductForm}</EuiModalBody>

        <EuiModalFooter>
          <EuiButtonEmpty onClick={closeModal}>Cancel</EuiButtonEmpty>

          <EuiButton type="submit" form="modalFormId" onClick={closeModal} fill>
            Save
          </EuiButton>
        </EuiModalFooter>
      </EuiModal>
    );
  }
  return (
    <div>
      <EuiButton onClick={showModal}>Add New Product</EuiButton>
      {modal}
    </div>
  );
};


export default AddProductModal;