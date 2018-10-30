import {combineReducers} from 'redux';
import matchReducer from './matchReducer';
import registerReducer from './registerReducer';

const rootReducer= combineReducers({
 matchReducer,
 registerReducer
});

export default rootReducer;