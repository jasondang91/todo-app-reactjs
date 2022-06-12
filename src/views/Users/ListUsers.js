import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class ListUsers extends React.Component {

    state = {
        listUsers: []
    }

    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=1');
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        })
    }

    handleViewDetailUser = (user) => {
        this.props.history.push(`/users/${user.id}`)
    }

    render() {
        let { listUsers } = this.state;
        return (
            <>
                <div className='container'>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div className='row justify-content-center align-items-center border m-3 p-3'
                                     key={item.id}>
                                    <div className='col-3'>
                                        <img src={item.avatar} alt=''/>
                                    </div>
                                    <div className='col-6'>
                                        {index + 1} - {item.first_name} {item.last_name}<br/>
                                        {item.email}
                                    </div>
                                    <div className='col-3'>
                                       <button className='btn btn-light' 
                                               onClick={() => this.handleViewDetailUser(item)}>Detail</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}

export default withRouter(ListUsers);