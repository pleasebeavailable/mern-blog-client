import {combineReducers} from 'redux';
import section from './reducers/section';
import post from './reducers/post';
import user from './reducers/user';

const getReducers = () => {
  return combineReducers({
    post,
    section,
    user
  });
};

export default getReducers;
