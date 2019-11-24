import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {Flash} from './../components/Flash';
import Menu from './../components/Menu';
import Dashboard from './../app/dashboard/components/Dashboard';
import PageNotFound from './../pages/PageNotFound';

import routes from './../app/routes';

export default class Layout extends React.Component {
  render() {
    return (
    	<main class="py-4"> 
    		<div className="container">
              <Flash />
            	<div className="row">
            		<Menu />
            		<Switch>
  				      	<Route exact path="/" component={Dashboard} />

                   {Object.values(routes).map((route, index) => (
                       <Route exact key={route.path} path={route.path} component={route.component} />
                    ))}

                   <Route path="*">
                     <PageNotFound />
                  </Route>
            		</Switch>
            	</div>
        	</div>
    	</main>
    );
  }
}
 
