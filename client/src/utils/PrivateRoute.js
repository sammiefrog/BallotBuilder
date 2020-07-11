import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Login from '../pages/Login';
import Validate from './Validate';
import { UserContext } from '../context/contexts/UserContext';

const PrivateRoute = ({path, component}) => {
    //deconstruct the user and dispatch from usercontext
    const { user, dispatch } = useContext(UserContext);
    //whether or not they are authorized is being checked by user.loggedin
    const authorized = user.loggedIn;

    //upon hitting this route, a validation request is sent, if the user is validated then authorized would be true, otherwise an error would be dispatched.
    useEffect(() => {
        const sendValidationRequest = () => {
            Validate().then(
                dispatch({type: 'VALIDATION_SUCCEEDED'})
            ).catch(error => {
                dispatch({
                    type: 'VALIDATION_FAILED',
                    payload: {error: `Please log in the visit the ${path} page!`}
                })
            })
        }
        sendValidationRequest();

    }, [dispatch, path]);
    //whether or not a user is authorized determines if they will get to the page, or be redirected to login!
    return authorized ? (
        <Route exact path={path} component={component} />
    ) : (
            <Redirect to='/login' component={Login} />
    );
}
 
export default PrivateRoute;