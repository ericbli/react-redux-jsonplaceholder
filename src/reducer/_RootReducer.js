import { combineReducers } from 'redux';
import {reducer as page1 } from './Page1';
import {reducer_post_detail as postDetail } from './Page1';

export default combineReducers({
    page1, postDetail          //把从/Page1引入的2个合一
});
