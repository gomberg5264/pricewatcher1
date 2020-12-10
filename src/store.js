import {createStore, combineReducers } from 'redux'
import userReducer from './reducers/userReducer'
import loginReducer from './reducers/loginReducer'
import signupReducer from './reducers/signupReducer'
import notificationReducer from './reducers/notificationReducer'
import watcherReducer from './reducers/watcherReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
  User: userReducer,
  login: loginReducer,
  signup: signupReducer,
  notification: notificationReducer,
  watchers: watcherReducer
})

const store = createStore(reducer,composeWithDevTools())

export default store
