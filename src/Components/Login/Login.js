import React, { useState, useEffect } from 'react';
import axios from 'axios';
import countriesData from '../../data/countries.json';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { logIn, getUser } from '../../store/actions/actions';
import './Login.css';

const Login = ({ user, logIn, getUser}) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [error, setError] = useState([]);
    const [ password, setPassword] = useState('');
    const verifyEmail = () => {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!email || regex.test(email) === false){
            setError('Invalid email')
            return false;
        }
        return true;
    }

    const handleForm = async (e) => {
        if(verifyEmail()) {
            const userData = {
                email: email,
                password: password
            };
            await logIn(userData);
        }
        e.preventDefault();        
    }
    useEffect(async () => {
        if(user.error) setError('Invalid email or password');
        else if(user.id) {
            await getUser(user.id);
            navigate('/dashboard')
        };
    }, [user])
    return(
        <div>
            <p className="fs-2 titleLogIn text-highBrown">Log In</p>
            
                <span className="error">{error}</span>
            
            <form onSubmit={e => handleForm(e) } className='form'>
                    <input type="email" placeholder="Email" className="w-75 bg-white inputCustome mb-3" onChange={e => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password" className="w-75 bg-white inputCustome mt-3" onChange={e => setPassword(e.target.value)}/>

                <div className='text-center alignButtonLogIn'>
                    <input type="submit" value="LogIn" className="Submit rounded bg-lowBrown fs-4 w-75"/>
                </div>
            </form>
            <div className="text-center">
                <span>New User? <Link to='/auth/signup' style={{ textDecoration: 'none', color: '#867971' }}>
                SigUp
                </Link></span>
            </div>
        </div>
    )
}


const mapStateToProps  = (state) => ({user:state.user})
  

export default connect(mapStateToProps, {logIn, getUser})(Login);