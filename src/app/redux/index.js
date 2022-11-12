import {combineReducers} from 'redux';
import section from './reducers/section';
import post from './reducers/post';
import user from './reducers/user';

const getReducers = (router) => {
  return combineReducers({
    router: router,
    post,
    section,
    user,
  });
};

export default getReducers;
