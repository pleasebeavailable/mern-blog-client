import {combineReducers} from 'redux';
import section from './reducers/section';

const getReducers = () => {
  return combineReducers({
    section,
  });
};

export default getReducers;
