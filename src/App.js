import React from 'react';

import AppRouter from './router/AppRoute';
import GlobalStyle from './theme/globalStyle';

const App = () => (
    <GlobalStyle>
        <AppRouter />
    </GlobalStyle>
)

export default App;
