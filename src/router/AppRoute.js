import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Layout from '../containers/Layout';
import Home from '../containers/Home';


const AppRouter = () => (
    <BrowserRouter>
        <Layout>            
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </Layout>
    </BrowserRouter>
)

export default AppRouter;