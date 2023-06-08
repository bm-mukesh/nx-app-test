import { applyMiddleware, compose } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";
import { legacy_createStore as createStore} from 'redux'

let composeEnhancers;
if (
  process.env.NODE_ENV !== "production" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) {
  composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
} else {
  composeEnhancers = compose;
}

export const store = createStore(
    reducers,
    {},
    composeEnhancers(applyMiddleware(thunk))
)   