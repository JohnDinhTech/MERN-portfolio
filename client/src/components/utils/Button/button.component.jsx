import React from "react";
import { WHITE } from "../../../constants/colors";

import "./button.styles.css";

const Button = ({
	text,
	color,
	fontWeight,
	style,
	children,
	isLink,
	...rest
}) => {
	if (isLink) {
		return (
			<a
				className='btn'
				style={{
					...style,
					fontWeight,
					backgroundColor: color,
					color: WHITE,
				}}
				{...rest}
			>
				{children || text}
			</a>
		);
	} else {
		return (
			<button
				className='btn'
				style={{
					...style,
					fontWeight,
					backgroundColor: color,
					color: WHITE,
				}}
				{...rest}
			>
				{children || text}
			</button>
		);
	}
};
export default Button;
