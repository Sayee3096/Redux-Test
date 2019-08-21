import {combineReducers} from 'redux';
import {addResultValue} from './addResultValue';


export default combineReducers({
    results : addResultValue
})