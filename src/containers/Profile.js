import React, { useEffect } from 'react';
import SideNav from '../Components/SideBar/sideNav';
import ContentContainer from '../Components/ContentContainer/ContentContainer';
import WhiteContainer from '../Components/whiteContainer/whiteContainer';
import { Link, useLocation } from 'react-router-dom';
import UserInfo from '../Components/UserInfo/UserInfo';
import UserUpdate from '../Components/UserUpdate/UserUpdate';
import { connect } from 'react-redux';
import { returnUser, getDepartments } from '../store/actions/actions';
import './Profile.css'


const Profile = ({user, departments, returnUser, getDepartments}) => {
    let location = useLocation();
    const { pathname } = location;
    const matchDepartment = (userDepartment) => {
        if(userDepartment === null) userDepartment = 1;
        if (departments.data) {
            for(let department of departments.data) {
                if(department.id === userDepartment) return department.name;
            }
        }
    }
    useEffect(async() => {
        await returnUser();
        await getDepartments();
    },[])
    console.log(user);
    return (
        <div className="d-flex">
            
            { 
                user.data && (
                    <>
                    <SideNav/>
                    <ContentContainer>
                        { pathname === '/profile' ? <UserInfo user={user.data} department={matchDepartment(user.data.department_id)}/> : <UserUpdate />}
                    </ContentContainer>
                    </>
                )
            }
            
        </div>
    )
}

const mapStateToProps  = (state) => ({
    user:state.user,
    departments: state.departments
})

export default connect(mapStateToProps,{returnUser, getDepartments})(Profile);