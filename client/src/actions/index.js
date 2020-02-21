import { ANIMATE_CLIP_PATH } from "./types";

export const animateClipPath = () => (dispatch) => {
	let topPercent = 107;
	let bottomPercent = 100;
	while (bottomPercent !== 50) {
		dispatch({
			type: ANIMATE_CLIP_PATH,
			payload: `polygon(0 0, ${topPercent}% 0, ${bottomPercent}% 100%, 0 100%);`,
		});
		topPercent--;
		bottomPercent--;
	}
};
