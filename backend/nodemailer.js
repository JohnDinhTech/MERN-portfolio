const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.EMAIL,
		pass: process.env.PASSWORD,
	},
});

const sendMail = async ({ fullName, from, number, message }) => {
	let text = `
    Full Name: ${fullName}
    Phone Number: ${number}
    Email: ${from}

    ${message}
    `;
	const mail = {
		text,
		from: "SenPieHS@gmail.com",
		to: "john@johndinh.tech",
		subject: `PORTFOLIO CONTACT - ${fullName}`,
	};
	try {
		await transporter.sendMail(mail);
		console.log("Message has been sent successfully!");
	} catch (error) {
		console.error(error.message);
	}
};

module.exports = sendMail;
