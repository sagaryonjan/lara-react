import React from 'react';
import {getPaginatedUsers, deleteUser} from './../api/calls';
import { Link, NavLink, useRouteMatch } from 'react-router-dom';

export default class UserList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			users: []
		}
	}

  componentDidMount() {
      this.setPaginatedUsers();
   }

   setPaginatedUsers()
   {
      getPaginatedUsers()
          .then(response => {
            this.setState({
                users: response.data
            });
        });
   }

   deleteUser(id, e) {
      
      e.preventDefault();

       deleteUser(id)
          .then(response => {
            this.setPaginatedUsers();
            flash('User deleted successfully');
       }) 
     
   }

  render() {

    return (
        <div className="col-md-8">
            <div className="card">
                <div className="card-header">
 					    Users
 					    <Link className="btn btn-primary ml-2" to="/users/create"> Create </Link>
                </div>

                <div className="card-body">
                  <table className="table table-striped">
					  <thead>
					    <tr>
					      <th>ID</th>
					      <th>Name</th>
					      <th>Email</th>
                 <th>Action</th>
					    </tr>
					  </thead>
					  <tbody>

						   {this.state.users.map((user) =>
							    <tr key={user.id}>
							      <th>{user.id}</th>
							      <td>{user.name}</td>
							      <td>{user.email}</td>
                    <td>
                      <Link className="btn btn-primary" to={'/users/' +user.id + '/edit'}> Edit </Link>
                      <button onClick={(e) => this.deleteUser(user.id, e)} className="btn btn-danger ml-1">Delete</button>
                    </td>
							    </tr>
						    )}

					  </tbody>
					</table>
                </div>
            </div>
        </div>
    );
  }
}
 