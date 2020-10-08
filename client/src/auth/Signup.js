import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'

import Layout from '../core/Layout'

const Signup = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        buttonText: 'Submit'
    });

    const { name, email, password, buttonText } = values

    const handleChange = (name) => (event) => {
        setValues({...values, [name]: event.target.value})
    }

    const clickSubmit = (event) => {
        event.preventDefault();
        setValues({...values, buttonText: 'Submitting...'})
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}/signup`,
            data: { name, email, password }
        })
        .then(res => {
            console.log('SIGNUP SUCCESS', res)
            setValues({...values, name: '', email: '', password: '', buttonText: 'Submit'})
            toast.success(res.data.message)
        })
        .catch(error => {
            console.log('SIGNUP ERROR', error.response.data)
            setValues({...values, buttonText: 'Submit'})
            toast.error(error.response.data.error)
        })
    }

    const signupForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">
                    Name
                </label>
                <input onChange={handleChange('name')} value={name} type="text" className="form-control" placeholder="username"/>
            </div>
            <div className="form-group">
                <label className="text-muted">
                    Email
                </label>
                <input onChange={handleChange('email')} value={email} type="email" className="form-control" placeholder="example@email.com"/>
            </div>
            <div className="form-group">
                <label className="text-muted">
                    Password
                </label>
                <input onChange={handleChange('password')} value={password} type="password" className="form-control" placeholder="password" />
            </div>
            <div>
                <button className="btn btn-primary" onClick={clickSubmit}>{buttonText}</button>
            </div>
        </form>
    )

    return (
        <Layout>
            <div className="col-md-6 offset-md-3">
                <ToastContainer />
                <h1 className="p-5">Signup</h1>
                {signupForm()}
            </div>
        </Layout>
    )
};

export default Signup
