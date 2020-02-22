import React from "react";
import { WHITE } from "../../../constants/colors";

import "./button.styles.css";

const Button = ({ text, color, fontWeight }) => (
	<button
		className='btn'
		style={{ backgroundColor: color, color: WHITE, fontWeight }}
	>
		{text}
	</button>
);
export default Button;
