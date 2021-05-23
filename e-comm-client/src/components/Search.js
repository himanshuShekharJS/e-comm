import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  EuiIcon,
  EuiFieldText,
  EuiFieldSearch,
  EuiSearchBar,
} from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_light.css";
import { searchAmong } from "../actions/productAction.js";

const Search = () => {
  const dispatch = useDispatch();
  const [isClearable, setIsClearable] = useState(true);
  const [value, setValue] = useState("");
  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };
  const onSearchHandler = () => {
    dispatch(searchAmong(value));
  };
  return (
    <EuiFieldSearch
      placeholder="Search all Products here. eg iPhone"
      value={value}
      onChange={(e) => onChangeHandler(e)}
      isClearable={isClearable}
      aria-label="Use aria labels when no actual label is in use"
      onSearch={onSearchHandler}
    />
  );
};
export default Search;
