import React from "react";
import { connect } from "react-redux";

import "./preLoader.styles.css";

const PreLoader = ({ heroImageLoaded, desktop }) => {
	if (!desktop) {
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
	...browser,
});

export default connect(mapStateToProps)(PreLoader);
