import React from "react";
import { Svg, Path } from "react-native-svg";

const AddSvg = ({ focus }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill={focus ? "#95A5A6" : "none"}
  >
    <Path
      d="M38 25.996H26V37.996H22V25.996H10V21.996H22V9.99597H26V21.996H38V25.996Z"
      fill="white"
    />
  </Svg>
);

export default AddSvg;
