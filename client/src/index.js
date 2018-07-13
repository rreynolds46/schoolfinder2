import 'bulma/css/bulma.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(
    reducers,
    {},composeWithDevTools(applyMiddleware(thunk))
);

export default store;

ReactDOM.render(
    <Provider store={store}>
            <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
