import {combineReducers} from  'redux'
import users_reducers from './users_reducers'
import posts_reducers from './posts_reducers'
import comments_reducers from './comments_reducers'

export default combineReducers({
  users_reducers,
  posts_reducers,
  comments_reducers
})