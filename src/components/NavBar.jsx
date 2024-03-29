// Dependencies
import { useAuth0 } from '@auth0/auth0-react'
import { useState } from 'react'

const NavBar = () => {

    const { user, isLoading, loginWithRedirect, loginWithPopup, getAccessTokenSilently, logout, isAuthenticated, } = useAuth0()

    const [accessMsg, setAccessMsg] = useState("")

    const login = async () => {
        loginWithRedirect({
            authorizationParams: {
                // connection: "email",
                // connection: "Username-Password-Authentication",
                // response_mode: "web_message",
                // scope: "openid email",
                // audience: "https://eric-culley-auth0.us.auth0.com/mfa/"
                // prompt: 'login',
                // login_hint: 'eric.culley@auth0.com',
                // screen_hint: 'signup'
                // organization: 'org_cVrNdGU2SoPSvZoT',
                // ui_locales: 'fr-FR',
                // skipMFA: 'true',
                'ext-guest': 'true'
            },
            // appState: {
            //     // returnTo: '/protected',
            //     test: true
            // }
        }).then(() => { 
            if (!user) {
                setAccessMsg("Access Denied: Please logout and try again.")
            } 
            
        })
    }

    const login2 = async () => {

        // LOGIN WITH POPUP
        await loginWithPopup({
            redirectUri: window.location.origin
            // max_age: 0,
            // scope: '',
            // manageAccount: true
        }).then(async () => { 
            try {
                const t = await getAccessTokenSilently()
                console.log("AWAITED T: ", t)
            } catch (err) {
                console.log("ERROR: ", err)
            }
        })
        

        // getIdTokenClaims({
        //     // scope: 'login2:clicked',
        //     org_id: 'org_9ybsU1dN2dKfDkBi'
        // }).then((res) => {
        //     console.log("GET ID TOKEN CLAIMS: ", res)
        // })


    }

    const appLogout = async () => {
        await logout({
            // client_id: process.env.REACT_APP_CLIENT_ID
            logoutParams: {
                // federated: true,
                // returnTo: 'https://google.com',
            }
        })
        console.log("Logout Check")
    }

    return (
        <nav id="navbar-container">
          <p>Auth0</p>
          {isAuthenticated ? <p>Authenticated</p> : <p>Not Authenticated</p>}
          <div id="auth-panel">
            {!isLoading && /*!user && !accessMsg && */ (
                <button onClick={login}>Log In</button>
            )}

            {/* {!isLoading && !user && accessMsg && <p>{accessMsg}</p>} */}

            {!isLoading && (
                <button onClick={appLogout}>Log Out</button>
            )}

            {!isLoading && !accessMsg && (
                <button onClick={login2}>Log In 2</button>
            )}
          </div>
        </nav>
    )
}

export default NavBar