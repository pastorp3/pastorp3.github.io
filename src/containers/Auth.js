import React from 'react';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import SideImage from '../Assets/authImage.jpg'
import MainLogo from '../Assets/alfonsomarina-600x110.png'
import { Link, useLocation } from 'react-router-dom';
import './Auth.css'
const Auth = () => {
    let location = useLocation();
    const { pathname } = location;
    console.log(pathname)
    return (
        <div className="d-flex">
            <img src={SideImage} alr="Side Iamge" className="sideImage"/>
            <div className="w-75">
                <div className="w-100pt-3">
                    <div className="text-center">
                        <img src={MainLogo} alt="Alfonso Marina Logo" className="w-75 "/>
                    </div>
                    { 
                        pathname === "/auth/login" ? <Login /> : <Register />
                    }
                </div>
            </div>
        </div>
    )
}

export default Auth;