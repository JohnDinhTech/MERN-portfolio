import React from "react";
import { WHITE } from "../../../constants/colors";

import "./button.styles.css";

const Button = ({ text, color }) => (
	<button className='btn' style={{ backgroundColor: color, color: WHITE }}>
		{text}
	</button>
);
export default Button;
