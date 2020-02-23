import React from "react";
import { WHITE } from "../../../constants/colors";

import "./button.styles.css";

const Button = ({ text, color, fontWeight, style }) => (
	<button
		className='btn'
		style={{ ...style, fontWeight, backgroundColor: color, color: WHITE }}
	>
		{text}
	</button>
);
export default Button;
