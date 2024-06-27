import React from 'react'
import {useAuth0} from "@auth0/auth0-react"
import "./GoogleAccess.css"
const GoogleAccess = () => {
    const {loginWithRedirect, isAuthenticated, logout } = useAuth0();
    return (
        <div > 
            {
                isAuthenticated ? (<button onClick={(e) => logout()}>Logout</button>) :

                    <button className='access' onClick={(e) => loginWithRedirect()}>Login with Google</button>
            }
        </div>
    )
}

export default GoogleAccess
