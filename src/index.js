import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducers from './reducers/index'

import './index.css';
import './assets/styles/main.scss'
import './assets/styles/icons/eyes.css'

const store = createStore(
  reducers,// reducers...
  {} //initial state..
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
