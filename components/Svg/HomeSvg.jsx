import React from "react";
import { Svg, Path } from "react-native-svg";

const HomeSvg = ({ focus }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
  >
    <Path
      d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69ZM12 3L2 12H5V20H11V14H13V20H19V12H22"
      fill={focus ? "#95A5A6" : "none"}
    />
  </Svg>
);

export default HomeSvg;
