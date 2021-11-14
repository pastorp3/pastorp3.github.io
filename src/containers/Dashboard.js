import React, { useEffect, useState } from 'react';
import SideNav from '../Components/SideBar/sideNav';
import ContentContainer from '../Components/ContentContainer/ContentContainer';
import WhiteContainer from '../Components/whiteContainer/whiteContainer';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser, getDepartments, returnUser } from '../store/actions/actions';


const Dashboard = ({user, departments, returnUser, getDepartments}) => {

    const matchDepartment = (userDepartment) => {
        console.log(userDepartment);
        if (departments.data) {
            for(let department of departments.data) {
                if(department.id === userDepartment) return department.name;
            }
        }
    }
    const [myraiting, setRiting] = useState('0');
    useEffect(async () => {
        await returnUser();
        await getDepartments();
    }, [])

    const fetchRaiting = async () => {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");


        const userData = {
            value: 'user',
            id: user.data.id
        }
        const raw = JSON.stringify(userData);
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        await fetch("https://alfonso-marinapp.herokuapp.com/prediction/score-review", requestOptions)
        .then(response => {
            if(response.ok) return response.text();
            else throw new Error('Can not Sing Up now try agin later.')
        })
        .then(result => {
            const res = JSON.parse(result);
            setRiting(String(res.result))
        })
        .catch(error => console.log(error));
    }
    

    if(user.data) fetchRaiting();


    const navigation = useNavigate()
    const department = "Sales";
    if( user.data )  {
        if(user.data.is_superuser) navigation('/admin/dashboard'); 
    }
    const latestServices = [
        {
            title: 'Service 1',
            raiting: 4,
            date: '11/01/21'
        },{
            title: 'Service 2',
            raiting: 2,
            date: '11/02/21'
        },
        {
            title: 'Service 3',
            raiting: 1,
            date: '11/03/21'
        },
        {
            title: 'Service 4',
            raiting: 5,
            date: '11/04/21'
        },
        {
            title: 'Service 5',
            raiting: 3,
            date: '11/05/21'
        }
    ]
    const raitingStars = (num) => {
        const starStyle = {
            color: '#FEC50E'
        }
        num = num.split('.')
        const stars = [];
        if(num.length === 1) {
            for(let i = 0; i < num[0]; i++) {
                stars.push(<BsStarFill style={starStyle}/>)
            }
        }
        else if(num.length === 2) {
            for(let i = 0; i < num[0]; i++) {
                stars.push(<BsStarFill style={starStyle}/>)
            }
            stars.push(<BsStarHalf style={starStyle}/> )
        }
        return stars;
    }
    
    const departmentraiting = '4';
    const mystars = raitingStars(myraiting);
    const departmentstars = raitingStars(departmentraiting);
    console.log(user);
    console.log(departments);
    return (
        <div className="d-flex">
            <SideNav user={user}/>
            <ContentContainer>
                <WhiteContainer style="d-flex marginb-4 h-100 p-3">
                    <div className="w-100">
                        <span className="fs-4 text-lowBrown">Username</span>
                        <p className="fs-1 text-highBrown">{user.data && `${user.data.first_name} ${user.data.last_name}`}</p>
                    </div>
                    <div className="w-100">
                        <span className="fs-4 text-lowBrown">Department</span>
                        <p className="fs-1 text-highBrown">{matchDepartment(user.department_id)}</p>
                    </div>
                </WhiteContainer>
                <div className="d-flex minh-100">
                    <WhiteContainer style="me-3 raitingpadding">
                        <div className="w-100">
                            <span className="fs-4 text-lowBrown">My Rating</span>
                            <br/>
                            <div className="w-100  d-flex flex-column justify-content-center text-center paddingNumber">
                                <span className="fs-1 text-highBrown">{ myraiting }</span>
                                <span className="fs-6 text-highBrown">Avg.</span>
                                <div>
                                    {
                                        mystars.map( star => star)
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="w-100">
                            <span className="fs-4 text-lowBrown">Department Rating</span>
                            <br/>
                            <div className="w-100  d-flex flex-column justify-content-center text-center paddingNumber">
                                <span className="fs-1 text-highBrown">{ departmentraiting }</span>
                                <span className="fs-6 text-highBrown">Avg.</span>
                                <div>
                                    {
                                        departmentstars.map( star => star)
                                    }
                                </div>
                            </div>
                        </div>
                    </WhiteContainer>
                    <WhiteContainer style="ms-3 raitingpadding">
                        <div className="w-100">
                                <span className="fs-4 text-lowBrown">Latest Services</span>
                                <div className="paddingNumber">
                                    <div className="d-flex justify-content-around text-highBrown fs-5 pt-1 pb-1">
                                        <span>Title</span>
                                        <span>Rating</span>
                                        <span>Date</span>
                                    </div>
                                    {
                                        latestServices.map( service => (
                                            <div className="d-flex justify-content-around text-highBrown fs-4 pt-1 pb-1">
                                                <span>{service.title}</span>
                                                <span>{service.raiting}</span>
                                                <span>{service.date}</span>
                                            </div>
                                        ))
                                    }
                                </div>
                        </div>
                    </WhiteContainer>
                </div>
            </ContentContainer>
        </div>
    )
}

const mapStateToProps  = (state) => ({
    user:state.user,
    departments :state.departments
})

export default connect(mapStateToProps,{returnUser, getDepartments})(Dashboard);