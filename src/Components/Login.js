import React, { useState } from "react";

import { useDispatch } from 'react-redux';
import axios from 'axios';

import { login } from '../features/userSlice.js';

import '../index.css'


const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    //console.log(email,password);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent the website from reloading

        axios.post(`https://testapi.teleskop.app/v2.0/users/login`, {email, password})
            .then( res => {
                console.log(res.data);
                //console.log(res.data.status); 
               alert("wrong email or password");              
                dispatch(
                    login({
                        email: email,
                        password: password,
                        LoggedIn: true,
                        id: res.data.token
                    })
                ); 
            })    
    };

    return (
        <div className='div-1'>
            <div className='div-2'>
                {/* "handleSubmit" validates the inputs before invoking "onSubmit" */}
                <form className="login_form" onSubmit={(e) => handleSubmit(e)}>
                    <h1 className='h1-login'>Login to your account 🔐</h1>
                    <div className='layout-div'>
                        <input type="email" name="email"
                            className="user-input"
                            placeholder = "Email"
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className='layout-div'>
                        <input type="password" name="password"
                            className="user-input"
                            placeholder = "Password"
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className='layout-div'>  
                        <button className="btn">Login</button>                      
                    </div>   
                    <div className='layout-div'>  
                        <p id="error"></p>                      
                    </div>                  
                </form>        
            </div>
        </div>
  );
}

export default Login;

