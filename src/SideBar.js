import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from './UserContext'

function SideBar() {
    const userContext =useContext(UserContext)
    return (
        <div>
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar"> 
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup> {userContext.userName}</div>
                </a>
                <hr className="sidebar-divider my-0" />
                <li className="nav-item active">
                    <Link className="nav-link" to ={"/Dashboard"}>
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></Link>
                </li>
                <hr className="sidebar-divider" />
                <div className="sidebar-heading">
                    Interface
                </div>
                <div className="sidebar-heading">
                    Addons
                </div>
                <li className="nav-item">
                    <Link className="nav-link" to={"/Users"}>
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Users</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/Products"}>
                        <i className="fas fa-fw fa-table"></i>
                        <span>Products</span></Link>
                </li>
              
                <hr className="sidebar-divider d-none d-md-block" />
                
              
            </ul>
        </div>
    )
}

export default SideBar