import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Layout from '../containers/Layout';
import Home from '../containers/Home';
import Details from '../containers/Details';
import Archive from '../containers/Archive';
import Genres from '../containers/Genres';
import FourOFour from '../components/FourOFour';

const AppRouter = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/genres" component={Genres} />
                <Route path="/archive" component={Archive} />
                <Route path="/movie/:id" component={Details} />
                <Route component={FourOFour} />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default AppRouter;
