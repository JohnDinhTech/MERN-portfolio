import React from "react";

const InputBar = ({ type, placeholder }) => {
	return (
		<input
			style={{
				padding: "1.6rem 2.5rem",
				width: "41.4rem",
				borderRadius: "0.5rem",
				border: "none",
				boxShadow: "0 3px 6px rgba(0, 0, 0, 0.5)",
				fontSize: "2rem",
			}}
			type={type}
			placeholder={placeholder}
		/>
	);
};

export default InputBar;
