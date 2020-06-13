import { combineReducers } from 'redux'
import surveyState from './survey'
const surveyApp = combineReducers({
    surveyState
})
export default surveyApp;