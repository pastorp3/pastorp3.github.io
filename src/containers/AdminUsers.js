import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ContentContainer from '../Components/ContentContainer/ContentContainer';
import WhiteContainer from '../Components/whiteContainer/whiteContainer';
import UserInfo from '../Components/UserInfo/UserInfo';
import UserUpdate from '../Components/UserUpdate/UserUpdate';
import './Profile.css'
import SideBarAdmin from '../Components/SideBarAdmin/SideBarAdmin';
import { connect } from 'react-redux';
import { getUser, getUsers, getDepartments } from '../store/actions/actions';
import Pagination from 'rc-pagination';


const AdminUsers = ({user, users, departments, getUser,getUsers, getDepartments}) => {

    const matchDepartment = (userDepartment) => {
        if(userDepartment == 0) userDepartment = 1;
        if (departments.data) {
            for(let department of departments.data) {
                if(department.id === userDepartment) return department.name;
            }
        }
    }

    useEffect(async () => {
        await getUsers();
        await getDepartments();
    }, []);

    console.log(users);
    console.log(departments)

    return (
        <div className="d-flex">
            <SideBarAdmin/>
            <ContentContainer>
            <WhiteContainer style="marginb-4 h-100 p-3">
                    <div className="w-100 sizeServices">
                        <span className="fs-4 text-lowBrown">Users</span>
                        { users.data && users.data.map((user, i) => (
                            <Link to={`/admin/users/${user.id}`}  style={{ textDecoration: 'none', color: '#867971' }}> 
                                <div className="text-highBrown d-flex justify-content-between mt-1 mb-2 fs-5">
                                    <span>{user.first_name} {user.last_name}</span>
                                    <span>{user.email}</span>
                                    <span>{user.country}</span>
                                    <span>{ matchDepartment(i)}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                    
                </WhiteContainer>
            </ContentContainer>
        </div>
    )
}
const mapStateToProps  = (state) => ({
    user:state.user,
    users: state.adminUsers,
    departments: state.departments
})

export default connect(mapStateToProps,{getUser, getUsers, getDepartments})(AdminUsers);