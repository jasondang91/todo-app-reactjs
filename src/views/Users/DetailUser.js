import React from 'react';
import { withRouter } from "react-router-dom";
import axios from 'axios';

class DetailUser extends React.Component {

    state = {
        user: {}
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`);
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })
        }
    }

    handleBackButton = () => {
        this.props.history.push('/users');
    }

    render() {

        let { user } = this.state;
        let isEmptyObj = Object.keys(user).length === 0; // Kiểm tra Object rỗng

        return (
           <>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            User with ID:  {this.props.match.params.id} 
                        </div>
                    </div>
                    {isEmptyObj === false && 
                        <div className='row justify-content-center'>
                            <div className='col-5 border text-center py-4'>
                                <img src={user.avatar} alt=''/><br/>
                                {user.first_name} {user.last_name} <br/>
                                {user.email} <br/>
                                <button className='btn bg-danger bg-gradient'
                                onClick={() => this.handleBackButton()}>Back</button>
                            </div>
                        </div>
                    }
                </div>
           </>
        )
    }
}

export default withRouter(DetailUser);