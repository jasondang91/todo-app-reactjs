/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from "react-router-dom";
import '../../styles/nav.css'

class Nav extends React.Component {
   render() {
      return (
         <>
            <div className="topnav">
               <NavLink to="/" activeClassName="active" exact={true}>
                  HOME
               </NavLink>
               <NavLink to="/todo" activeClassName="active">
                  TO-DO
               </NavLink>
               <NavLink to="/users" activeClassName="active">
                  USERS
               </NavLink>
            </div>
         </>
      )
   }
}

export default Nav;