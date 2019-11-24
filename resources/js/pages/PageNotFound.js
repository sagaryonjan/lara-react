import React from 'react';

import {
  useLocation
} from "react-router-dom";

export default function PageNotFound() {
  let location = useLocation();
  return (
  	 <div className="col-md-8">
            <div className="card">
                <div className="card-header">
 					404 Page
                </div>

                <div className="card-body">
                  <h3>
			        Page not found for <code>{location.pathname}</code>
			      </h3>
                </div>
            </div>
        </div>
  );
}