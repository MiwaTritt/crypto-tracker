import React from 'react'
import ReactDOM from 'react-dom'

import { createStore as createReduxStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'

import rootReducer from './reducers' 

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Pass in initial state
// Also apply our middleware for navigating
const createStore = (initialState = {}) => {
    
    const store = createReduxStore(
        combineReducers({
            rootReducer,
            router: routerReducer
        }),
        initialState,
        applyMiddleware(middleware)
    )

    return store
}

export default createStore