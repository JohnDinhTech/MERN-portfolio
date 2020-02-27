import React from "react";
import { WHITE } from "../../../constants/colors";

import "./button.styles.css";

const Button = ({ text, color, fontWeight, style, children }) => (
	<button
		className='btn'
		style={{ ...style, fontWeight, backgroundColor: color, color: WHITE }}
	>
		{children || text}
	</button>
);
export default Button;
