import React from "react";
import { connect } from "react-redux";

import "./preLoader.styles.css";

const PreLoader = ({ heroImageLoaded, tablet }) => {
	if (tablet) {
		return (
			<div className={`preloader preloader-${heroImageLoaded}`}>
				<h1>Loading...</h1>
				<div className='loader'>
					<div>
						<div>
							<div>
								<div>
									<div>
										<div></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return null;
	}
};

const mapStateToProps = ({ heroImageLoaded, browser }) => ({
	heroImageLoaded,
	...browser.greaterThan,
});

export default connect(mapStateToProps)(PreLoader);
