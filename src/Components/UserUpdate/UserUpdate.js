import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import WhiteContainer from '../whiteContainer/whiteContainer';
import countriesData from '../../data/countries.json';
import './UserUpdate.css';

const UserUpdate = () => {
    const navigate = useNavigate();
    const [ firstName, setFName] = useState('Pastor');
    const [ lastName, setLName] = useState('Pedraza');
    const [ email, setEmail] = useState('pastorpedraza3@gmail.com');
    const [ department, setDepartment] = useState('Sales');
    const [ country, setCountry] = useState('Mexico')
    const [ birthDate, setDate] = useState('2021-10-10');
    const [ region, setRegion] = useState('Michoacan');
    const [ city, setCity] = useState('Morelia');
    const [ phone, setPhone] = useState('4434041612');
    const handleSubmit = (e) => {
        navigate('/profile')
        e.preventDefault()
    }
    return (
        <>
            <WhiteContainer style="containerHeight marginb-4  p-3">
                <form onSubmit={handleSubmit}>
                    <div className="d-flex mb-3">
                        <div className="w-100">
                            <span className="fs-5 text-lowBrown">First Name</span><br/>
                            <input type="text" placeholder="First Name" value={firstName} className="w-75 bg-white inputCustome me-2 fs-2" onChange={e => setFName(e.target.value)}/>
                        </div>
                        <div className="w-100">
                            <span className="fs-5 text-lowBrown">Last Name</span><br/>
                            <input type="text" placeholder="Last Name" value={lastName} className="w-75 bg-white inputCustome me-2 fs-2" onChange={e => setLName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="d-flex mb-3">
                        <div className="w-100">
                            <span className="fs-5 text-lowBrown">Email</span><br/>
                            <input type="email" placeholder="example@email.com" value={email} className="w-75 bg-white inputCustome me-2 fs-2" onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <div className="w-100">
                            <span className="fs-5 text-lowBrown">Depatment</span><br/>
                            <input type="text" placeholder="Department" value={department} className="w-75 bg-white inputCustome me-2 fs-2" onChange={e => setDepartment(e.target.value)}/>
                        </div>
                    </div>
                    <div className="d-flex mb-3">
                        <div className="w-100">
                            <span className="fs-5 text-lowBrown">Country</span><br/>
                            <select className="w-75 fs-2 selectCountry" onChange={e => setCountry(e.target.value)} value={country}>
                                {
                                    countriesData.map( country =>  <option value={country.name} key={country.code}>{country.name}</option>)
                                }
                            </select>
                        </div>
                        <div className="w-100">
                            <span className="fs-5 text-lowBrown">Birth Date</span><br/>
                            <input type="date" className="w-75 bg-white inputCustome me-2 fs-2" value={birthDate} onChange={e => setDate(e.target.value)}/>
                        </div>
                    </div>
                    <div className="d-flex mb-3">
                        <div className="w-100">
                            <span className="fs-5 text-lowBrown">Region</span><br/>
                            <input type="text" placeholder="Region" value={region} className="w-75 bg-white inputCustome me-2 fs-2" onChange={e => setRegion(e.target.value)}/>
                        </div>
                        <div className="w-100">
                            <span className="fs-5 text-lowBrown">City</span><br/>
                            <input type="text" placeholder="City" value={city} className="w-75 bg-white inputCustome me-2 fs-2" onChange={e => setCity(e.target.value)}/>
                        </div>
                    </div>
                    <div>
                        <div className="w-100">
                            <span className="fs-5 text-lowBrown">Phone Number</span><br/>
                            <input type="tel" placeholder="Phone Number" value={phone} className="w-60 bg-white inputCustome me-2 fs-2" onChange={e => setPhone(e.target.value)}/>
                        </div>
                    </div>
                    <div className='text-center alignButton'>
                        <input type="submit" value="Save" className="Submit rounded bg-lowBrown fs-4 w-50"/>
                    </div>
                </form>
            </WhiteContainer>
        </>
    )
}

export default UserUpdate;