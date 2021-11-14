import React, { useEffect, useState} from 'react';
import SideNav from '../Components/SideBar/sideNav';
import ContentContainer from '../Components/ContentContainer/ContentContainer';
import WhiteContainer from '../Components/whiteContainer/whiteContainer';
import './Rate.css';
import { connect } from 'react-redux';
import { returnUser, getUsers, getDepartments } from '../store/actions/actions';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

const Rate = ({user,users, departments,getUsers, returnUser, getDepartments}) => {
    let location = useLocation();
    const { pathname } = location;
    const { userId } = useParams();
    const navigate = useNavigate();
    const [ rate1 , setRate1] = useState('');
    const [ rate2 , setRate2] = useState('');
    const [ rate3 , setRate3] = useState('');
    const [ rate4 , setRate4] = useState('');
    const [ rate5 , setRate5] = useState('');
    const [ rate6 , setRate6] = useState('');
    const [ opinion , setOpinion] = useState('');
    
    
    const matchDepartment = (userDepartment) => {
        if(userDepartment === null) userDepartment = 1;
        if (departments.data) {
            for(let department of departments.data) {
                if(department.id === userDepartment) return department.name;
            }
        }
    }
    const handleRate = (id) => {
        navigate(`/rate/${id}`)
    }

    const handleSubmit = (e) => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");


        const userData = {
            answers_a: rate1,
            answers_b: rate2,
            answers_c: rate3,
            answers_d: rate4,
            answers_e: rate5,
            answers_f: rate6,
            opinion: opinion,
            user_id: user.data.id
        }
        const raw = JSON.stringify(userData);
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
     
        fetch("https://alfonso-marinapp.herokuapp.com/rating/ratings", requestOptions)
        .then(response => {
            if(response.ok) return response.text();
            else throw new Error('Can not Sing Up now try agin later.')
        })
        .then(result => navigate('/rate'))
        .catch(error => console.log(error));
        
        e.preventDefault();
    }
    useEffect(async() => {
        await returnUser();
        await getUsers();
        await getDepartments();
    }, [])
    console.log(users,'Users.......')
    console.log(user);
    return (
        <div className="d-flex">
            <SideNav/>
            <ContentContainer>
                {
                    pathname === '/rate' ? (
                        <WhiteContainer style="d-flex marginb-4 h-100 p-3">
                    <div className="w-100 sizeServices">
                        <span className="fs-4 text-lowBrown">Rate a User</span><br/>
                        <div className="d-flex flex-column">
                            { users.data && (
                                users.data.map( x => (
                                    <div className="d-flex justify-content-between">
                                        <span>{x.first_name}</span>
                                        <span>{x.last_name}</span>
                                        <span>{matchDepartment(x.department_id)}</span>
                                        <button onClick={ e => handleRate(x.id)}>Rate</button>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </WhiteContainer>
                    ) : (
                        <WhiteContainer style="d-flex marginb-4 h-100 p-3">
                    <div className="w-100 sizeServices">
                        <span className="fs-4 text-lowBrown">Rate </span><br/>
                        <form onSubmit={ e => handleSubmit(e)}>
                            <div className="d-flex w-100">
                                <div className="w-100 me-2">
                                    <label className="mt-2">Service 1</label><br/>
                                    <input type="number" max="5" placeholder="" className="w-100 bg-white inputCustome mb-2" onChange={ e => setRate1(e.target.value)}/>
                                </div>
                                <div className="w-100 ms-2">
                                    <label className="mt-2">Service 2</label><br/>
                                    <input type="number" max="5" placeholder="" className="w-100 bg-white inputCustome mb-2" onChange={ e => setRate2(e.target.value)}/>
                                </div>
                            </div>
                            <div className="d-flex w-100">
                                <div className="w-100 me-2">
                                    <label className="mt-2">Service 3</label><br/>
                                    <input type="number" max="5" placeholder="" className="w-100 bg-white inputCustome mb-2" onChange={ e => setRate3(e.target.value)}/>
                                </div>
                                <div className="w-100 ms-2">
                                    <label className="mt-2">Service 4</label><br/>
                                    <input type="number" max="5" placeholder="" className="w-100 bg-white inputCustome mb-2" onChange={ e => setRate4(e.target.value)}/>
                                </div>
                            </div>
                            <div className="d-flex w-100">
                                <div className="w-100 me-2">
                                    <label className="mt-2">Service 5</label><br/>
                                    <input type="number" max="5" placeholder="" className="w-100 bg-white inputCustome mb-2" onChange={ e => setRate5(e.target.value)}/>
                                </div>
                                <div className="w-100 ms-2">
                                    <label className="mt-2">Service 6</label><br/>
                                    <input type="number" max="5" placeholder="" className="w-100 bg-white inputCustome mb-2" onChange={ e => setRate6(e.target.value)}/>
                                </div>
                            </div>
                            <textarea placeholder="Opinion" className="w-100 mt-3" maxlength="200" rows="10" onChange={ e => setOpinion(e.target.value)}>

                            </textarea>
                            <div className='text-center'>
                                <input type="submit" value="Submit" className="bg-lowBrown text-highBrown p-2 w-50 rounded SubmitButton" />
                            </div>
                        </form>
                        
                    </div>
                </WhiteContainer>
                    )
                }
                
            </ContentContainer>
        </div>
    )
}

const mapStateToProps  = (state) => ({
    user:state.user,
    users: state.adminUsers,
    departments: state.departments
})

export default connect(mapStateToProps,{getUsers, returnUser, getDepartments})(Rate);