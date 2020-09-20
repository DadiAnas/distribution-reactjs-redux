import React from "react";
import { Select, Tag } from "antd";
const { Option } = Select;

type Props = {
  values: []; // data
  selectedValues: [];
  key: string;
  title: string;
  handleChange: (args: number[]) => any;
  placeHolder: string;
  value: number[];
};

function MultipleInputSelect(props: any) {
  const { values, key, title, handleChange, placeHolder, value } = props;
  return (
    <Select
      key={key}
      defaultValue={value?.map((v: any) => ({ key: v.id }))}
      mode="multiple"
      style={{ width: "100%" }}
      placeholder={placeHolder}
      onChange={handleChange}
      labelInValue
      optionLabelProp="label"
      options={values?.map((v: any) => ({ value: v.id, label: v.name }))}
    />
  );
}

export default MultipleInputSelect;
