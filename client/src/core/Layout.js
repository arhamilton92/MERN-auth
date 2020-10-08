import React, { Fragment } from 'react';
import { isAuth } from '../auth/helpers'
import { Link, withRouter } from 'react-router-dom';

const Layout = ({ children, match }) => {
    const isActive = path => {
        if(match.path === path) {
            return{color: '#000'}
        } else {
            return {color: '#fff'}
        }
    }
    
    const nav = () => (
        <ul className="nav nav-tabs bg-primary">
            <li className="nav-item">
                <Link to="/" className="nav-link" style={isActive('/')}>
                    Home 
                </Link>
            </li>
            {!isAuth() && (
                <Fragment>
                    <li className="nav-item">
                        <Link to="/signin" className="nav-link" style={isActive('/signin')}>
                            Login
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/signup" className="nav-link" style={isActive('/signup')}>
                            Sign Up
                        </Link>
                    </li>
                </Fragment>
            )}
        </ul>
    )
    return (
        <Fragment>
            {nav()}
            <div className="container">
                { children }
            </div>
        </Fragment>
    )
}

export default withRouter(Layout);