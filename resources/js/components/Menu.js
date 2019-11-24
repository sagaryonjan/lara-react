import React from 'react';
import { NavLink } from 'react-router-dom'



export default class Layout extends React.Component {
  render() {
    return (
    	<div className="col-md-4">
            <div className="card">
                <div className="card-header">Menus</div>

                <div className="card-body">
	                <ul className="list-group">
                     <li className="list-group-item">
                        <NavLink to="/" activeClassName="active">Dashboard</NavLink>
                     </li>
                    <li className="list-group-item">
                        <NavLink to="/users" activeClassName="active">Users</NavLink>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    );
  }
}
 