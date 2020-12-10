import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {Provider} from 'react-redux'
import store from './store'
import Router from './Router'

ReactDOM.render(
  <Provider store = {store} >
      <Router />
  </Provider>,
  document.getElementById('root')
)
