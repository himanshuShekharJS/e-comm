import React,{Fragment,useState} from 'react';
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
    EuiFilePicker,EuiOverlayMask,EuiDualRange
  } from '@elastic/eui';
  import '@elastic/eui/dist/eui_theme_light.css';
import { htmlIdGenerator } from '@elastic/eui/lib/services';



  const Filter = () =>{
    const [isModalVisible, setIsModalVisible] = useState(false);
    const[filterOption,setFilterOption] = useState('mens_wear')
    const [dualPriceValue, setDualPriceValue] = useState([100,80000 ]);
    const closeModal = () => setIsModalVisible(false);
    const showModal = () => setIsModalVisible(true);

    const onSubmitHandler = () =>{
        console.log('You Submitted the Filter form');
        setIsModalVisible(false)
    }
    

      const onDualPriceChange = (dualPriceValue) =>{
        setDualPriceValue(dualPriceValue)
        console.log('Inside Filter.js---->,Current Price choosed for Filtering----->',dualPriceValue);
        console.log('Inside Filter.js---->,Current Price Range choosed for Filtering----->',dualPriceValue[0],'------->',dualPriceValue[1]);
      }
    const onFilterOptionChangeHandler = (value) => {
        setFilterOption(value)
      };
    const categoryOptions = [
        {
          value: 'mens_wear',
          inputDisplay: 'Filter by Men\'s Wear',
          dropdownDisplay: (
            <Fragment>
              <strong>Filter by Men's Wear</strong>
            </Fragment>
          ),
        },
        {
          value: 'womens_wear',
          inputDisplay: 'Filter by Women\'s Wear',
          dropdownDisplay: (
            <Fragment>
              <strong>Filter by Women's Wear</strong>
            </Fragment>
          ),
        },
        {
          value: 'laptops',
          inputDisplay: 'Filter by Laptops',
          dropdownDisplay: (
            <Fragment>
              <strong>Filter by Laptops</strong>
            </Fragment>
          ),
        },
        {
          value: 'mobiles',
          inputDisplay: 'Filter by Mobiles',
          dropdownDisplay: (
            <Fragment>
              <strong>Filter by Mobiles</strong>
            </Fragment>
          ),
        },
        {
            value: 'low_to_high',
            inputDisplay: 'Filter by Low to High Price',
            dropdownDisplay: (
              <Fragment>
                <strong>Filter by Low to High Price</strong>
              </Fragment>
            ),
          },
          {
            value: 'high_to_low',
            inputDisplay: 'Filter by High to Low Price',
            dropdownDisplay: (
              <Fragment>
                <strong>Filter by High to Low Price</strong>
              </Fragment>
            ),
          },
          {
            value: 'range',
            inputDisplay: 'Filter within Range',
            dropdownDisplay: (
              <Fragment>
                <strong>Filter within Range</strong>
                 <EuiDualRange
                    id={htmlIdGenerator()()}
                    value={dualPriceValue}
                    onChange={onDualPriceChange}
                    min={100}
                    max={80000}
                    step={10}
                    showInput
                    showLabels
                    aria-label="Dual Price Range Slider"
                    fullWidth
      />
              </Fragment>
            ),
          }
      ];



    const FilterProductForm = (
        <EuiSuperSelect
        options={categoryOptions}
        valueOfSelected={filterOption}
        onChange={(value) => onFilterOptionChangeHandler(value)}
        itemLayoutAlign="top"
        fullWidth
      />
    )




    let modal;

    if (isModalVisible) {
      modal = (
        <EuiOverlayMask>
        <EuiModal onClose={closeModal} style={{ width: 700 }}>
          <EuiModalHeader>
            <EuiModalHeaderTitle>
              <h3>Apply Filter to all Products</h3>
            </EuiModalHeaderTitle>
          </EuiModalHeader>
  
          <EuiModalBody>{FilterProductForm}</EuiModalBody>
  
          <EuiModalFooter style={{justifyContent:'center'}}>
            <EuiButtonEmpty onClick={closeModal}>Cancel</EuiButtonEmpty>
  
            <EuiButton type="submit" form="modalFormId" onClick={onSubmitHandler} fill>
             OK
            </EuiButton>
          </EuiModalFooter>
        </EuiModal>
        </EuiOverlayMask>
      );
    }
    
    return (
      <span>
        <EuiButton  fill size='s' onClick={showModal}>Filter Products</EuiButton>
        {modal}
      </span>
    );
  };

  export default Filter;
  