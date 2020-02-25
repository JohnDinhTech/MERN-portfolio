import React from "react";
import "./card.styles.css";
import { DARK_BLUE, WHITE, LIGHT_GREEN } from "../../../constants/colors";
const Card = ({ data }) => {
	const { title, text, icon } = data;
	return (
		<div className='card' style={{ backgroundColor: DARK_BLUE }}>
			<div className='title'>
				<img src={icon} alt='Card icon' />
				<h1 style={{ color: LIGHT_GREEN }}>{title}</h1>
			</div>
			<div className='text' style={{ color: WHITE }}>
				{text}
			</div>
		</div>
	);
};

export default Card;
