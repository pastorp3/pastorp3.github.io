import React, { useState, useEffect } from 'react';
import countriesData from '../../data/countries.json';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp, getDepartments } from '../../store/actions/actions';
import './Register.css';

const Register = ({user, departments, signUp , getDepartments}) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [error, setError] = useState([]);
    const [ fName, setFName] = useState('');
    const [ lName, setLName] = useState('');
    const [ password, setPassword] = useState('');
    const [ confirm, setConfirm] = useState('');
    const [ department, setDepartment] = useState('')
    const verifyEmail = () => {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!email || regex.test(email) === false){
            setError('Invalid email')
            return false;
        }
        return true;
    }

    const verifyPassword = () => {
        if( password !== confirm) {
            setError('Passowrd and Confirm Password must be the same')
            return false;
        }
        return true
    }

    const handleForm = async (e) => {
        if(verifyEmail() && verifyPassword()) {
            const userData = {
                email: email,
                password: password,
                first_name: fName,
                last_name: lName,
                department_id: parseInt(department)
            };
            console.log(department);
            await signUp(userData);
        };
        e.preventDefault();
    }

    useEffect(async () => {
        await getDepartments();
        if(user.error) setError('Can not Sing Up now try again later.');
        else if(user === true) navigate('/auth/login');
    }, [user])
    console.log(departments)
    return(
        <div>
            <p className="fs-2 title text-highBrown">Sign Up</p>
             <span className="error">{error}</span>
            <form onSubmit={e => handleForm(e)} className='form'>
                <div className="d-flex mb-3">
                    <input type="text" placeholder="First Name" className="w-75 bg-white inputCustome me-2" onChange={e => setFName(e.target.value)}/>
                    <input type="text" placeholder="Last Name" className="w-75 bg-white inputCustome ms-2" onChange={e => setLName(e.target.value)}/>
                </div>
                <div className='d-flex mb-3'>
                    <input type="password" placeholder="Password" className="w-75 bg-white inputCustome me-2" onChange={e => setPassword(e.target.value)} />
                    <input type="password" placeholder="Confirm Password" className="w-75 bg-white inputCustome ms-2" onChange={e => setConfirm(e.target.value)}/>
                </div>
                <div className="d-flex mb-3">
                    <input type="email" placeholder="example@email.com" className="w-75 bg-white inputCustome me-2" onChange={e => setEmail(e.target.value)}/>
                    {/* <input type="text" placeholder="Department" className="w-75 bg-white inputCustome ms-2"/> */}
                    <select className="ms-2 w-75 selectCountry" onChange={ e => setDepartment(e.target.value)}>
                    {
                        departments.data && departments.data.map( department =>  <option value={department.id} key={department.id}>{department.name}</option>)
                    }
                    </select>
                </div>
                <label>Country</label><br/>
                <select className="mb-3 w-100 selectCountry">
                    {
                        countriesData.map( country =>  <option value={country.name} key={country.code}>{country.name}</option>)
                    }
                </select>
                <div className="d-flex mb-3">
                    <input type="text" placeholder="Region" className="w-75 bg-white inputCustome me-2"/>
                    <input type="text" placeholder="City" className="w-75 bg-white inputCustome ms-2"/>
                </div>
               <label>Birth Date</label><br/>
                <input type="date" className="w-100 bg-white inputCustome mb-3 mt-2"/><br/>
                <input type="tel" placeholder="Phone Number" className="w-100 bg-white inputCustome mb-3"/>
                <br/>
                <div className='text-center alignButton'>
                    <input type="submit" value="SignUp" className="Submit rounded bg-lowBrown fs-4 w-75"/>
                </div>
            </form>
            <div className="text-center">
                <span>Already have a user? <Link to='/auth/login' style={{ textDecoration: 'none', color: '#867971' }}>
                LogIn
                </Link></span>
            </div>
        </div>
    )
}

const mapStateToProps  = (state) => ({
    user:state.user,
    departments: state.departments
})

export default connect(mapStateToProps,{signUp, getDepartments})(Register);