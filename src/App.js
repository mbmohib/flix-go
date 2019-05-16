import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import AppRouter from './router/AppRoute';
import GlobalStyle from './theme/globalStyle';
import reducer from './store/reducers/movies';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

const App = () => (
    <Provider store={store}>
        <GlobalStyle>
            <AppRouter />
        </GlobalStyle>
    </Provider>
)

export default App;
