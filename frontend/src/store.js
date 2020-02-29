import rootReducer from "./reducers";
import { responsiveStoreEnhancer } from "redux-responsive";
import thunk from "redux-thunk";

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];

export default createStore(
	rootReducer,
	composeWithDevTools(responsiveStoreEnhancer, applyMiddleware(...middleware))
);
