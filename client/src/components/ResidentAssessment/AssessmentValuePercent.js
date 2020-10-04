import React, { useEffect } from "react";

const placeHolder = 1;
const CalculatedField1 = props => {
  useEffect(() => {
    let val = 0;
    //if (placeHolder==1) {
    if (props.values.oralAndVisionCare && props.values.socialSupport) {
    val = ((parseInt(props.values.oralAndVisionCare) + parseInt(props.values.socialSupport))/51*100).toFixed(2);
    }
    props.setFieldValue("assessmentValuePercent", val);
  }, [props.values]);

  return (
    <input
      id="assessmentValuePercent"
      type="number"
      minimumractionigits="4"
      name="assessmentValuePercent"
      value={props.values.assessmentValuePercent}
      readOnly={true}
    />
  );
};

export default CalculatedField1;