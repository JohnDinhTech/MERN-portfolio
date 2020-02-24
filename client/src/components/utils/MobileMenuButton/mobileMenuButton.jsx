import React from "react";
import "./mobileMenuButton.styles.css";
import { connect } from "react-redux";
import { toggleMobileMenu } from "../../../actions";
import { DARK_BLUE, WHITE, BRAND_BLUE } from "../../../constants/colors";
const MobileMenuButton = ({ toggleMobileMenu, menuState }) => {
	return (
		<div
			onClick={() => {
				toggleMobileMenu();
			}}
			style={{
				backgroundColor: menuState ? WHITE : BRAND_BLUE,
			}}
			className='mobile-menu-button'
		>
			<div className='cross'>
				<div
					style={{ backgroundColor: menuState ? BRAND_BLUE : WHITE }}
					className='line'
				></div>
				<div
					style={{ backgroundColor: WHITE, zIndex: "-1" }}
					className='line'
				></div>
			</div>
		</div>
	);
};

export default connect(null, {
	toggleMobileMenu,
})(MobileMenuButton);
