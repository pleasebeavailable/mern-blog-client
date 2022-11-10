import {combineReducers} from 'redux';
import section from './reducers/section';
import post from './reducers/post';

const getReducers = () => {
  return combineReducers({
    post,
    section,
  });
};

export default getReducers;
