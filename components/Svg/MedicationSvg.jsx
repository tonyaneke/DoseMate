import React from "react";
import { Svg, Path } from "react-native-svg";

const MedicationSvg = ({ focus }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={focus ? "#95A5A6" : "none"}
  >
    <Path
      d="M14 7C14.7956 7 15.5587 7.31607 16.1213 7.87868C16.6839 8.44129 17 9.20435 17 10V20C17 20.2652 16.8946 20.5196 16.7071 20.7071C16.5196 20.8946 16.2652 21 16 21H8C7.73478 21 7.48043 20.8946 7.29289 20.7071C7.10536 20.5196 7 20.2652 7 20V10C7 9.20435 7.31607 8.44129 7.87868 7.87868C8.44129 7.31607 9.20435 7 10 7M14 7H10M14 7V4C14 3.73478 13.8946 3.48043 13.7071 3.29289C13.5196 3.10536 13.2652 3 13 3H11C10.7348 3 10.4804 3.10536 10.2929 3.29289C10.1054 3.48043 10 3.73478 10 4V7M10 14H14M12 12V16"
      stroke="#95A5A6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default MedicationSvg;
