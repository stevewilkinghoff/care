import React, { useEffect } from "react";

const placeHolder = 1;
const CalculatedField = props => {
  useEffect(() => {
    let val = 0;
    //if (placeHolder==1) {
    if (props.values.oralAndVisionCare && props.values.socialSupport) {
    val = parseInt(props.values.oralAndVisionCare) + parseInt(props.values.socialSupport);
    }
    props.setFieldValue("assessmentValue", val);
  }, [props.values]);

  return (
    <input
      id="assessmentValue"
      type="text"
      name="assessmentValue"
      value={props.values.assessmentValue}
      readOnly={true}
    />
  );
};

export default CalculatedField;