import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ContentContainer from '../Components/ContentContainer/ContentContainer';
import WhiteContainer from '../Components/whiteContainer/whiteContainer';
import UserUpdate from '../Components/UserUpdate/UserUpdate';
import './Profile.css'
import SideBarAdmin from '../Components/SideBarAdmin/SideBarAdmin';
import { connect } from 'react-redux';
import { getUser, getUsers, getDepartments } from '../store/actions/actions';
import Pagination from 'rc-pagination';
import  UserInfo from '../Components/UserInfo/UserInfo';

const AdminUsers = ({user, users, departments, getUser,getUsers, getDepartments}, props) => {
    const { id } = useParams();
    const [ currentUser, setUser ] = useState([]);
    const matchDepartment = (userDepartment) => {
        if(userDepartment == 0) userDepartment = 1;
        if (departments.data) {
            for(let department of departments.data) {
                if(department.id === userDepartment) return department.name;
            }
        }
    }

    useEffect(async () => {
        await getDepartments();
        await getUsers();
        fetch(`https://alfonso-marinapp.herokuapp.com/user/users/${id}`)
            .then(response => {
                if(response.ok) return response.text();
                else throw new Error('Invalid Email or Password')
            })
            .then(result => setUser(JSON.parse(result)))
            .catch(error => console.log(error));
    }, []);

    console.log(users);
    console.log(departments)
    console.log(currentUser)
  

    return (
        <div className="d-flex">
            <SideBarAdmin/>
            <ContentContainer>
            <WhiteContainer style="marginb-4 h-100 p-3">
                    <div className="w-100 sizeServices">
                        <UserInfo user={currentUser.data} department={matchDepartment(1)}/>
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