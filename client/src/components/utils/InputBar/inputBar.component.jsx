import React from "react";

const InputBar = ({ style, type, placeholder, name, required, width }) => {
	return (
		<input
			style={{
				...style,
				padding: "1.6rem 2.5rem",
				width: width,
				borderRadius: "0.5rem",
				border: "none",
				fontSize: "2rem",
				outline: "none",
			}}
			type={type}
			placeholder={placeholder}
			name={name}
			required={required}
		/>
	);
};

export default InputBar;
