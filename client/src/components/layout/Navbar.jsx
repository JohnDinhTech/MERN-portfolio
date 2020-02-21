import React from "react";
import Button from "../utils/Button";
import { LIGHT_GREEN } from "../../constants/colors";

const Navbar = () => {
	return (
		<nav>
			<ul>
				<li>
					<a href={null}>ABOUT</a>
				</li>
				<li>
					<a href={null}>PORTFOLIO</a>
				</li>
				<li>
					<Button color={LIGHT_GREEN} text='GET IN TOUCH' />
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
