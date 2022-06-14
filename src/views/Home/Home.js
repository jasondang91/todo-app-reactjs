import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import Logo from '../../assets/img/quang.jpeg';


class Home extends React.Component {

   componentDidMount = () => {
      // setTimeout(() => {
      //    // console.log('>>> Check Timeout: ');
      //    this.props.history.push('/todo');
      // }, 3000)
   }

   handleDeleteUSer = (user) => {
   //  console.log('>>> Check user delete react: ', user);
      this.props.deleteUserRedux(user);
   }

   handleAddUser = () => {
      this.props.addUserRedux();
   }

   // HOC: HIGHER ORDER COMPONENT
   render() {
      console.log('>>> Check Props Redux: ', this.props.dataRedux);
      let listUsers = this.props.dataRedux;
      return (
         <>
            <section className='home'>
               <div className='container'>
                  <div className='row py-5'>
                     <div className='col-12'>
                        <h1>Welcome to my world.. </h1>
                        <img src={Logo} className='img-thumbnail round' alt='' />
                     </div>
                  </div>
                  <div className='row py-5 justify-content-center'>
                     <div className='col-12'>
            
                     <button className='btn btn-sm btn-light mb-4' onClick={() => this.handleAddUser()}>Add New User With Redux</button>
               
                        <h1>List Users</h1>
                           {listUsers && listUsers.length > 0 &&
                              listUsers.map((item, index) => {
                                 return ( 
                                    <div
                                       key={item.id} 
                                       className='user-item justify-content-sm-start'>
                                       {index + 1} - { item.name } <span><button className='btn btn-sm btn-light' onClick={() => this.handleDeleteUSer(item)}>x</button></span>  
                                    </div>
                                 )
                              })
                           }
                     </div>
                  </div>
               </div>
            </section>
         </>
      )
   }
}

const mapStateToProps = (state) => {
   return {
      dataRedux: state.users
   }
}

const mapDispatchToProps = (dispatch) => {
   // dispatch plain to action
   return {
      deleteUserRedux: (userDelete) => dispatch(
         {type: 'DELETE_USER', payload: userDelete }
      ),
      addUserRedux: () => dispatch ({
         type: 'CREATE_USER'
      }),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));