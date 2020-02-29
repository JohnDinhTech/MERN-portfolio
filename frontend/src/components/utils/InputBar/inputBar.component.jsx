import React from "react";

const InputBar = ({
	style,
	type,
	placeholder,
	name,
	required,
	width,
	onChange,
	value,
}) => {
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
			onChange={onChange}
			type={type}
			placeholder={placeholder}
			name={name}
			required={required}
			value={value}
		/>
	);
};

export default InputBar;
