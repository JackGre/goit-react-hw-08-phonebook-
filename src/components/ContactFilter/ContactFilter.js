import React from "react";
import { FilterSection, Label, Input } from "./Filter.styles";
import { useDispatch } from "react-redux";
import { updateFilterValue } from "../../redux/contacts/contacts-actions";

const Filter = ({ value }) => {
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(updateFilterValue(e.target.value));
  };

  return (
    <FilterSection>
      <Label>
        Поиск контактов по имени
        <Input name="filter" type="text" value={value} onChange={onChange} />
      </Label>
    </FilterSection>
  );
};

export default Filter;