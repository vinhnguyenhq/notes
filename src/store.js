import client from './ApolloClient';

const loggerMiddleware = createLogger();
const middlewares = [thunk, loggerMiddleware, client.middleware()];

const enhancers = [];
const devToolsExtension = window.devToolsExtension;
if (typeof devToolsExtension === 'function') {
  enhancers.push(devToolsExtension());
}
const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
);
const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers,
);
