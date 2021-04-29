import {createStore, combineReducers} from 'redux'
import CourseReducers from './reducers/CourseReducers' 
import {devToolsEnhancer} from 'redux-devtools-extension'

const root = combineReducers ({
    CourseReducers     
});

const store = createStore(root, devToolsEnhancer())

export default store