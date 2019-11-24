import React from 'react';

import UserForm from './../components/UserForm';
import {findUser, updateUser} from './../api/calls';

export default class UserEdit extends React.Component {

    constructor(props) {
        super(props);
        this.formElement = React.createRef();
        this.userId = this.props.match.params.userId;
    }

    handleFormSubmit(data) {
       updateUser(this.userId, data)
          .then((response) => {
              flash('User updated successfully.', 'success');
              this.history.push('/users');
        })
    }

     async componentDidMount() {
        await findUser(this.userId)
            .then((response) => {
                this.formElement.current.setState({
                    name : response.data.name,
                    email : response.data.email
                })      
            }).catch(response => {
                flash('User is not available.', 'warning');
                this.props.history.push('/users');
            });
    }

    render() {
        return (
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header">Edit user</div>

                    <div className="card-body">
                        <UserForm ref={this.formElement} history={this.props.history} userId={this.userId} onFormSubmit={this.handleFormSubmit}  />
                    </div>
                </div>
            </div>
        );
    }
}
