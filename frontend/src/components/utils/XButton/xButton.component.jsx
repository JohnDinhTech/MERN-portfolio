import React from "react";
import "./xButton.styles.css";
const XButton = ({ ...rest }) => {
	return (
		<div className='x-button' {...rest}>
			<div className='cross'>
				<div className='line'></div>
				<div className='line'></div>
			</div>
		</div>
	);
};

export default XButton;
