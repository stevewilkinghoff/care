import React, { useEffect } from "react";

const placeHolder = 1;
const CalculatedField = props => {
  useEffect(() => {
    let val = 0;
    //if (placeHolder==1) {
    if (props.values.monthlyRentAmount && props.values.monthlyCareAmount) {
    val = parseInt(props.values.monthlyRentAmount) + parseInt(props.values.monthlyCareAmount);
    }
    props.setFieldValue("monthlyTotalAmount", val);
  }, [props.values]);

  return (
    <input
      id="monthlyTotalAmount"
      type="text"
      name="monthlyTotalAmount"
      value={props.values.monthlyTotalAmount}
      readOnly={true}
    />
  );
};

export default CalculatedField;