import React from 'react'
import ReactDOM from 'react-dom'
import createStore from './store/createStore'
import App from './components/App'

// ========================================================
// Store Instantiation
// ========================================================
const initialState = window.__INITIAL_STATE__
const store = createStore(initialState)

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root')

let render = () => {
  ReactDOM.render(
    <App />,
    MOUNT_NODE
  )
}


// ========================================================
// Go!
// ========================================================
render()
