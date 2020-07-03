import React, { createContext } from 'react';

export const UserContext = createContext();

class UserContextProvider extends Component {
    state = { 
        isLoggedIn: false,
    }
    
    render() { 
        return (
        <UserContext.Provider value={{...this.state}}>
            {this.props.children}
        </UserContext.Provider> );
    }
}
 
export default UserContextProvider;