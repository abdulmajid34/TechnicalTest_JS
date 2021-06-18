import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from '../middlewares/middleware'
import reducer from './reducers/reducer'

const store = createStore(reducer, applyMiddleware(thunk, logger))

export default store