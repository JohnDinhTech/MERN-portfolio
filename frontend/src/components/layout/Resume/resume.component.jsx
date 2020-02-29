import React from "react";

const Resume = () => {
	return (
		<div className='container'>
			<embed
				style={{
					width: "100%",
					height: "100vh",
				}}
				src='http://localhost:5000/image/0d035e242abc72fa61450685a3f10f4a.PDF'
				type='application/pdf'
			/>
		</div>
	);
};

export default Resume;
