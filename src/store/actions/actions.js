import axios from 'axios';
import { LOG_IN, SIGN_UP, GET_USER, AUTH_ERROR, GET_DEPARTMENTS, GET_USERS, RETURN_USER } from '../actions/type';

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");



export const returnUser = () => (
    {
      type: RETURN_USER 
    }
  );

export const logIn = (userData) => async dispatch => {
    const raw = JSON.stringify(userData);

    
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
 
    fetch("https://alfonso-marinapp.herokuapp.com/user/users/authentication", requestOptions)
    .then(response => {
        if(response.ok) return response.text();
        else throw new Error('Invalid Email or Password')
    })
    .then(result => dispatch({
        type: LOG_IN,
        payload: JSON.parse(result)
    }))
    .catch(error => dispatch({
        type: AUTH_ERROR,
        payload: error
    }));
      
}


export const signUp = (userData) => async dispatch => {
    console.log('working')
    const raw = JSON.stringify(userData);
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
 
    fetch("https://alfonso-marinapp.herokuapp.com/user/users", requestOptions)
    .then(response => {
        if(response.ok) return response.text();
        else throw new Error('Can not Sing Up now try agin later.')
    })
    .then(result => dispatch({
        type: SIGN_UP,
        payload: JSON.parse(result)
    }))
    .catch(error => dispatch({
        type: AUTH_ERROR,
        payload: error
    }));
      
}

export const getUser = (userId) => async dispatch => {
 
    fetch(`https://alfonso-marinapp.herokuapp.com/user/users/${userId}`)
    .then(response => {
        if(response.ok) return response.text();
        else throw new Error('Invalid Email or Password')
    })
    .then(result => dispatch({
        type: GET_USER,
        payload: JSON.parse(result)
    }))
    .catch(error => dispatch({
        type: AUTH_ERROR,
        payload: error
    }));
      
}

export const getDepartments = () => async dispatch => {
 
    fetch(`https://alfonso-marinapp.herokuapp.com/department/departments`)
    .then(response => {
        if(response.ok) return response.text();
        else throw new Error('Error Relaod')
    })
    .then(result => dispatch({
        type: GET_DEPARTMENTS,
        payload: JSON.parse(result)
    }))
    .catch(error => console.log(error));
      
}

export const getUsers = () => async dispatch => {
 
    fetch(`https://alfonso-marinapp.herokuapp.com/user/users`)
    .then(response => {
        if(response.ok) return response.text();
        else throw new Error('Error Relaod')
    })
    .then(result => dispatch({
        type: GET_USERS,
        payload: JSON.parse(result)
    }))
    .catch(error => console.log(error));
      
}


