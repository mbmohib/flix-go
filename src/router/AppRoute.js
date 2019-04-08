import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Layout from '../containers/Layout';
import Home from '../containers/Home';
import Details from '../containers/Details';


const AppRouter = () => (
    <BrowserRouter>
        <Layout>            
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/details" component={Details} />
            </Switch>
        </Layout>
    </BrowserRouter>
)

export default AppRouter;