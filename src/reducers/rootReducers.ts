// rootReducer.js
import { combineReducers } from 'redux';
import { setUserProfile } from '../store/userProfile-slice';

const rootReducer = combineReducers({
    userProfile: setUserProfile,
    // Other reducers if you have them
});

export default rootReducer;