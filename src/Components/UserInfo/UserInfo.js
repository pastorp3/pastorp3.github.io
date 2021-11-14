import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import WhiteContainer from '../whiteContainer/whiteContainer';
import {connect} from 'react-redux'
import './UserInfo.css';
const UserInfo = ({user, department}) => {
    const navigate = useNavigate();
    const handleDelete = () => {
        if( user.data.is_superuser) {

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
    
            const requestOptions = {
                method: 'DELETE',
                headers: myHeaders,
                redirect: 'follow'
            };
         
            fetch(`https://alfonso-marinapp.herokuapp.com/user/users/${user.id}`, requestOptions)
            .then(response => {
                if(response.ok) return response.text();
                else throw new Error('Can not Sing Up now try agin later.')
            })
            .then(result => navigate('/admin/users'))
            .catch(error => console.log(error));
        }
    }
    console.log(user,'user>>>>>>>>>>')
    return (
        <>
            <WhiteContainer style="containerHeight marginb-4  p-3">
                <div className="d-flex mb-3">
                    <div className="w-100">
                        <span className="fs-5 text-lowBrown">First Name</span><br/>
                        {
                            user && <span className="fs-2 text-highBrown">{user.first_name}</span>
                        }
                        
                    </div>
                    <div className="w-100">
                        <span className="fs-5 text-lowBrown">Last Name</span><br/>
                        {
                            user && <span className="fs-2 text-highBrown">{user.last_name}</span>
                        }
                    </div>
                </div>
                <div className="d-flex mb-3">
                    <div className="w-100">
                        <span className="fs-5 text-lowBrown">Email</span><br/>
                        {
                            user && <span className="fs-2 text-highBrown">{user.email}</span>
                        }
                    </div>
                    <div className="w-100">
                        <span className="fs-5 text-lowBrown">Depatment</span><br/>
                        {
                            user && <span className="fs-2 text-highBrown">{department}</span>
                        }
                    </div>
                </div>
                <div className="d-flex mb-3">
                    <div className="w-100">
                        <span className="fs-5 text-lowBrown">Country</span><br/>
                        {
                            user && <span className="fs-2 text-highBrown">{user.country}</span>
                        }
                    </div>
                    <div className="w-100">
                        <span className="fs-5 text-lowBrown">Birth Date</span><br/>
                        {
                            user && <span className="fs-2 text-highBrown">{user.born_date}</span>
                        }
                    </div>
                </div>
                <div className="d-flex mb-3">
                    <div className="w-100">
                        <span className="fs-5 text-lowBrown">Region</span><br/>
                        {
                            user && <span className="fs-2 text-highBrown">{user.state}</span>
                        }
                    </div>
                    <div className="w-100">
                        <span className="fs-5 text-lowBrown">City</span><br/>
                        {
                            user && <span className="fs-2 text-highBrown">{user.city}</span>
                        }
                    </div>
                </div>
                <div className="alignLastItem">
                    <div className="w-100">
                        <span className="fs-5 text-lowBrown">Phone Number</span><br/>
                        {
                            user && <span className="fs-2 text-highBrown">{user.phone_number}</span>
                        }
                    </div>
                </div>
                <div className="d-flex justify-content-around">
                    <div className="text-center bg-lowBrown text-highBrown rounded w-25">
                        <div className="UpdateButton  ">
                            <Link to='/profile/update' style={{ textDecoration: 'none', color: '#867971' }}>
                                <span className="fs-4 ps-2">Update</span>
                            </Link> 
                        </div>
                    </div>
                    <div className="text-center  bg-danger text-black rounded w-25" onClick={e => handleDelete(e)}>
                        <div className="UpdateButton">
                            <span className="fs-4 ps-2">Delete</span>    
                        </div>
                    </div>
                </div>
            </WhiteContainer>
        </>
    )
}

export default UserInfo;