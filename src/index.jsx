import React from 'react'
import ReactDOM from 'react-dom'
import App from 'components/App'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from 'store/reducer'

import 'bootstrap/dist/css/bootstrap.min.css'
const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)
