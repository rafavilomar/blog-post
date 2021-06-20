import {combineReducers} from  'redux'
import users_reducers from './users_reducers'
import posts_reducers from './posts_reducers'

export default combineReducers({
  users_reducers,
  posts_reducers
})