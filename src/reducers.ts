import { combineReducers } from 'redux';
import client from './ApolloClient';

export const rootReducer = combineReducers({
  apollo: client.reducer(),
});
