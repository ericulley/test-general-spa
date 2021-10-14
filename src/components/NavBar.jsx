import { useAuth0 } from '@auth0/auth0-react'
import { useState } from 'react'

const NavBar = () => {

    const { user, isLoading, loginWithRedirect, logout, getAccessTokenSilently } = useAuth0()

    const [accessMsg, setAccessMsg] = useState("")

    const login = async () => {
        loginWithRedirect().then(() => {
            if (!user) {
                setAccessMsg("Access Denied: Please logout and try again.")
            }
        })
    }

    return (
        <nav id="navbar-container">
          <p>Auth0</p>
          <div id="auth-panel">
            {!isLoading && !user && !accessMsg && (
                <button onClick={login}>Log In</button>
            )}

            {/* {!isLoading && !user && accessMsg && <p>{accessMsg}</p>} */}

            {!isLoading && (
                <button onClick={() => {logout()}}>Log Out</button>
            )}
          </div>
        </nav>
    )
}

export default NavBar