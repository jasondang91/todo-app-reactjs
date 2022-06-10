import React from 'react'
import { withRouter } from "react-router";




class Home extends React.Component {

   componentDidMount = () => {
      setTimeout(() => {
         // console.log('>>> Check Timeout: ');
         this.props.history.push('/todo');
      }, 3000)
   }

   // HOC: HIGHER ORDER COMPONENT
   render() {
      // console.log('>>> Check Props: ', this.props);
      return (
         <div>Home</div>
      )
   }
}

export default withRouter(Home);