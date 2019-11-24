import React from 'react';
import UserForm from './../components/UserForm';
import {createUser} from './../api/calls';


export default class UserCreate extends React.Component {

    constructor(props) {
        super(props);
    }
    
    handleFormSubmit(data) {
        createUser(data).then((response) => {
            flash('User created successfully.', 'success');
            this.history.push('/users');
        })

    }

    render() {
        return (
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header">Create new user</div>

                    <div className="card-body">
                        <UserForm history={this.props.history} onFormSubmit={this.handleFormSubmit}  />
                    </div>
                </div>
            </div>
        );
    }
}
