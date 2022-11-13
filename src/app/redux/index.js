import {combineReducers} from 'redux';
import section from './reducers/section';
import post from './reducers/post';
import user from './reducers/user';
import navigate from './reducers/navigate';

const getReducers = (router) => {
  return combineReducers({
    router: router,
    post,
    section,
    user,
    navigate
  });
};

export default getReducers;
